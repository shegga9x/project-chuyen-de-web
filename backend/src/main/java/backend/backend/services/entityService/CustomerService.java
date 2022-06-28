package backend.backend.services.entityService;

import backend.backend.helpers.payload.request.CustomerRequest;
import backend.backend.helpers.payload.response.CustomerResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Customer;
import backend.backend.persitence.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

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
}
