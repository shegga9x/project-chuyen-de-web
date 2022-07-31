package backend.backend.services.entityService;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.dto.CustomerDTO;
import backend.backend.helpers.payload.request.CustomerRequest;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.Customer;
import backend.backend.persitence.entities.OrderItem;
import backend.backend.persitence.entities.Product;
import backend.backend.persitence.entities.ResetEmailToken;
import backend.backend.persitence.entities.ResetPhoneToken;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.CustomerRepository;
import backend.backend.persitence.repository.OrderItemRepository;
import backend.backend.persitence.repository.ResetEmailTokenRepository;
import backend.backend.persitence.repository.ResetPhoneTokenRepository;
import backend.backend.services.subService.EmailService;

@Service
public class CustomerService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ResetPhoneTokenRepository resetPhoneTokenRepository;

    @Autowired
    private ResetEmailTokenRepository resetEmailTokenRepository;

    @Autowired
    EmailService emailService;

    public CustomerDTO getCurrentCustomer() {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<Customer> optional = customerRepository.findByIdCustomer(idCustomer);
        if (optional.isPresent()) {
            Customer customer = optional.get();
            CustomerDTO customerResponse = (CustomerDTO) SubUtils.mapperObject(customer, new CustomerDTO());
            customerResponse.setEmail(customer.getAccount().getEmail());
            customerResponse.setBirthday(customer.getBirthday());
            return customerResponse;
        } else {
            Account account = accountRepository.getById(idCustomer);
            Customer customer = new Customer();
            customer.setAccount(account);
            customer.setImgUrl("url(https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png)");
            customer.setName(SubUtils.getCurrentUser().getEmail().split("@")[0]);
            CustomerDTO customerResponse = (CustomerDTO) SubUtils.mapperObject(customer, new CustomerDTO());
            customerResponse.setEmail(SubUtils.getCurrentUser().getEmail());
            customerRepository.save(customer);
            return customerResponse;
        }
    }

    public String changeInformationCustomer(CustomerRequest customerRequest) throws ParseException {
        System.out.println("okok");
        Account account = accountRepository.getById(SubUtils.getCurrentUser().getId());
        Customer customer = (Customer) SubUtils.mapperObject(customerRequest, new Customer());
        customer.setIdCustomer(SubUtils.getCurrentUser().getId());
        customer.setAddressId("customer" + customer.getIdCustomer());

        customer.getAddress().setId("customer" + customer.getIdCustomer());
        customer.setAccount(account);
        // birthday

        customerRepository.save(customer);
        return null;
    }

    public String checkPhoneExistCustomer() {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Customer customer = customerRepository.findByIdCustomer(idCustomer).get();
        if (customer.getPhoneNumber() == null) {
            throw new CustomException("Vui lòng thêm số điện thoại trước khi thanh toán");
        }
        return "ok";
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
            ///
            Account account = resetPhoneToken.getAccount();
            account.setResetPhoneToken(new ResetPhoneToken(idCustomer, new Date(), null, null));
            Customer customer = account.getCustomer();
            customer.setPhoneNumber(phoneNumber);
            ///
            customerRepository.save(customer);
            accountRepository.save(account);
        } else {
            throw new CustomException("SMS không đúng hoặc không hợp lệ");
        }
        return "ok";
    }

    // onCompleteOrderPayment
    public String onCompleteOrderPayment(String sms) {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<ResetPhoneToken> optinal = resetPhoneTokenRepository.findByResetTokenContent(sms);
        if (optinal.isPresent()) {
            ResetPhoneToken resetPhoneToken = optinal.get();
            if (resetPhoneToken.getResetTokenExpires().before(new Date())) {
                throw new CustomException("SMS đã hết hạn");
            }
            ///
            Account account = resetPhoneToken.getAccount();
            account.setResetPhoneToken(new ResetPhoneToken(idCustomer, new Date(), null, null));
            // change status to 2
            List<OrderItem> listOrderItem = orderItemRepository.findByIdCustomerAndStatus(idCustomer, (byte) 1);
//            for (OrderItem orderItem : listOrderItem) {
//                orderItem.setStatus((byte) 2);
//            }
            // change quantity product
            for (OrderItem orderItem : listOrderItem) {
                Product product = orderItem.getProduct();
                product.setQuantity(product.getQuantity() - orderItem.getQuantity());
            }
            ///
            orderItemRepository.saveAll(listOrderItem);
            accountRepository.save(account);
        } else {
            throw new CustomException("SMS không đúng hoặc không hợp lệ");
        }
        return "ok";
    }

    public String sendEmailSMS(String email) throws MessagingException {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Account account = accountRepository.getById(idCustomer);
        //
        ResetEmailToken resetEmailToken = account.getEmailResetToken();
        if (resetEmailToken == null) {
            resetEmailToken = new ResetEmailToken();
            resetEmailToken.setAccount(account);
        }
        // create reset token that expires after 1 day
        String emailSMS = get6RandomNumber();
        resetEmailToken.setResetTokenContent(emailSMS);
        resetEmailToken.setResetTokenExpires(new Date(new Date().getTime() + 86400000));
        resetEmailTokenRepository.save(resetEmailToken);
        // send email
        emailService.sendEmailSMS(email, emailSMS);
        return "ok";
    }

    public String checkEmailSMS(String sms, String email) {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<ResetEmailToken> optinal = resetEmailTokenRepository.findByResetTokenContent(sms);
        if (optinal.isPresent()) {
            ResetEmailToken resetEmailToken = optinal.get();
            if (resetEmailToken.getResetTokenExpires().before(new Date())) {
                throw new CustomException("SMS đã hết hạn");
            }
            ///
            Account account = resetEmailToken.getAccount();
            account.setResetEmailToken(new ResetEmailToken(account.getIdAccount(), new Date(), null, null));
            account.setEmail(email);
            ///
            accountRepository.save(account);
        } else {
            throw new CustomException("SMS không đúng hoặc không hợp lệ");
        }
        return "ok";
    }

    private String get6RandomNumber() {
        Random rnd = new Random();
        int number = rnd.nextInt(999999);
        return String.format("%06d", number);
    }

}
