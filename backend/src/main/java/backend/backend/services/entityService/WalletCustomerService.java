package backend.backend.services.entityService;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.WalletCustomer;
import backend.backend.persitence.repository.WalletCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WalletCustomerService {

    @Autowired
    private WalletCustomerRepository walletCustomerRepository;

    public double getMoneyByIdCustomer() {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<Double> total = walletCustomerRepository.getMoneyByIdCustomer(idCustomer);
        if (total.isPresent()) {
            return total.get();
        }
        return 0;
    }

    public double addMoneyToCustomerWallet(double money) {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<WalletCustomer> optional = walletCustomerRepository.findByIdCustomer(idCustomer);
        double result;
        if (optional.isPresent()) {
            WalletCustomer walletCustomer = optional.get();
            double total = walletCustomer.getTotal() + money;
            walletCustomer.setTotal(total);
            result = total;
            walletCustomerRepository.save(walletCustomer);
        } else {
            WalletCustomer walletCustomer = new WalletCustomer();
            walletCustomer.setIdCustomer(idCustomer);
            walletCustomer.setTotal(money);
            result = money;
            walletCustomerRepository.save(walletCustomer);
        }
        return result;
    }

    public void removeMoneyFormCustomerWallet(double money) {
        int idCustomer = SubUtils.getCurrentUser().getId();
        Optional<WalletCustomer> optional = walletCustomerRepository.findByIdCustomer(idCustomer);
        if (optional.isPresent()) {
            WalletCustomer walletCustomer = optional.get();
            if (walletCustomer.getTotal() < money) {
                throw new CustomException("Khách hàng không đủ tiền mua hàng, vui lòng nạp thêm");
            }
            double total = walletCustomer.getTotal() - money;
            walletCustomer.setTotal(total);
            walletCustomerRepository.save(walletCustomer);
        } else {
            throw new CustomException("Khách hàng không đủ tiền mua hàng, vui lòng nạp thêm");
        }
    }
}
