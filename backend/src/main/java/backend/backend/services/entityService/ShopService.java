package backend.backend.services.entityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.dto.ShopDTO;
import backend.backend.helpers.payload.request.ghn.GHNStoreRegistRequest;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Account;
import backend.backend.persitence.entities.Addrress;
import backend.backend.persitence.entities.Shop;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.AddressRepository;
import backend.backend.persitence.repository.ShopRepository;
import backend.backend.services.subService.GHNService;

@Service
public class ShopService {

    @Autowired
    private ShopRepository shopRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private GHNService ghnService;

    public Shop getShop() {
        try {
            return shopRepository.findById(SubUtils.getCurrentUser().getId()).get();
        } catch (Exception e) {
            throw new CustomException("Chua co Shop");
        }
    }

    public Shop getShop(int idShop) {
        try {
            return shopRepository.findById(idShop).get();
        } catch (Exception e) {
            throw new CustomException("Chua co Shop");
        }
    }

    public Integer updateShop(ShopDTO request) {
        Shop shop = (Shop) SubUtils.mapperObject(request, new Shop());
        Integer shopID = shop.getIdShop();
        if (shopID == null) {
            Account account = accountRepository.getById(SubUtils.getCurrentUser().getId());
            shopID = account.getIdAccount();
            Addrress addrress = shop.getAddress();
            GHNStoreRegistRequest ghnModel = new GHNStoreRegistRequest(addrress.getDistrictId1(),
                    addrress.getWardCode1() + "", shop.getName(), shop.getPhoneNumber(), addrress.getSubLocate());
            addrress.setId(ghnService.createStore(ghnModel));
            try {
                shopRepository.insertNewShop(shopID, shop.getName(),
                        shop.getPhoneNumber(), shop.getImgUrl(),
                        addressRepository.save(addrress).getId(),
                        shop.getDescription());
            } catch (Exception e) {
            }
        } else {
            Addrress addrress = shopRepository.getById(shopID).getAddress();
            shop.setAddressId(addrress.getId());
            shop.setAddrress(addrress);
            shopRepository.save(shop);
        }
        return shopID;
    }

}
