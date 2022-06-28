package backend.backend.services.entityService;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.request.CustomerRequest;
import backend.backend.helpers.payload.response.CustomerResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.Customer;
import backend.backend.persitence.entities.ResetPhoneToken;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.CustomerRepository;
import backend.backend.persitence.repository.ResetPhoneTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;
import java.util.Random;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ResetPhoneTokenRepository resetPhoneTokenRepository;

    public CustomerResponse getCurrentCustomer() {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Customer customer = customerRepository.findByIdCustomer(idCustomer).get();
        CustomerResponse customerResponse = (CustomerResponse) SubUtils.mapperObject(customer, new CustomerResponse());
        customerResponse.setEmail(customer.getAccount().getEmail());
        customerResponse.setBirthday(customer.getBirthday());
        return customerResponse;
    }

    public String changeInformationCustomer(CustomerRequest customerRequest) throws ParseException {
        Customer customer = new Customer();
        customer.setIdCustomer(customerRequest.getIdCustomer());
        customer.setAddress(customerRequest.getAddress());
        customer.setGender(customerRequest.getGender());
        customer.setImgUrl(customerRequest.getImgUrl());
        customer.setPhoneNumber(customerRequest.getPhoneNumber());
        customer.setName(customerRequest.getName());
        //birthday
        customer.setBirthday(new SimpleDateFormat("yyyy-MM-dd").parse(customerRequest.getBirthday()));
        customerRepository.save(customer);
        return null;
    }

    public String sendPhoneSMS() {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Account account = accountRepository.getById(idCustomer);
        //
        ResetPhoneToken resetPhoneToken = account.getPhoneResetToken();
        if (resetPhoneToken == null) {
            resetPhoneToken = new ResetPhoneToken();
            resetPhoneToken.setAccount(account);
        }
        // create reset token that expires after 1 day
        String SMSPhone = get6RandomNumber();
        resetPhoneToken.setResetTokenContent(SMSPhone);
        resetPhoneToken.setResetTokenExpires(new Date(new Date().getTime() + 86400000));
        resetPhoneTokenRepository.save(resetPhoneToken);
        return SMSPhone;
    }

    public String checkPhoneSMS(String sms, String phoneNumber) {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<ResetPhoneToken> optinal = resetPhoneTokenRepository.findByResetTokenContent(sms);
        if (optinal.isPresent()) {
            ResetPhoneToken resetPhoneToken = optinal.get();
            if (resetPhoneToken.getResetTokenExpires().before(new Date())) {
                throw new CustomException("SMS đã hết hạn");
            }
            Customer customer = customerRepository.findByIdCustomer(idCustomer).get();
            customer.setPhoneNumber(phoneNumber);
            ///
            Account account = resetPhoneToken.getAccount();
            account.setResetPhoneToken(new ResetPhoneToken(idCustomer, new Date(), null, null));
            ///
            customerRepository.save(customer);
            accountRepository.save(account);
        } else {
            throw new CustomException("SMS không đúng hoặc không hợp lệ");
        }
        return "ok";
    }

    private static String get6RandomNumber() {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        return String.format("%06d", number);
    }
}
