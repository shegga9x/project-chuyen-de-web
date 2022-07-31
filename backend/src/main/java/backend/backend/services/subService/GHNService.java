package backend.backend.services.subService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

import backend.backend.helpers.payload.dto.ShopDTO;
import backend.backend.helpers.payload.request.ghn.CalFeeRequest;
import backend.backend.helpers.payload.request.ghn.GHNCalFeeRequest;
import backend.backend.helpers.payload.request.ghn.GHNCalFeeResponse;
import backend.backend.helpers.payload.request.ghn.GHNOrderCreateRequest;
import backend.backend.helpers.payload.request.ghn.GHNServiceRequest;
import backend.backend.helpers.payload.request.ghn.GHNServiceResponse;
import backend.backend.helpers.payload.request.ghn.GHNServiceTypeRequest;
import backend.backend.helpers.payload.request.ghn.GHNServiceTypeResponse;
import backend.backend.helpers.payload.request.ghn.GHNStoreRegistRequest;
import backend.backend.helpers.payload.response.CartItemResponse;
import backend.backend.helpers.payload.response.ProductResponse;
import backend.backend.helpers.utils.GHNUltils;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Addrress;
import backend.backend.persitence.entities.Customer;
import backend.backend.persitence.entities.Shop;
import backend.backend.persitence.model.ghn.GHNServiceModel;
import backend.backend.persitence.repository.CustomerRepository;
import backend.backend.persitence.repository.ShopRepository;

@Service
public class GHNService {
    public String token = "133bb4b2-065a-11ed-ad26-3a4226f77ff0";
    public String ghnAPI = "https://online-gateway.ghn.vn/shiip/public-api/v2/";
    RestTemplate restTemplate;

    @Autowired
    ShopRepository shopRepository;
    @Autowired
    CustomerRepository customerRepository;

    public GHNService() {
        restTemplate = new RestTemplate();
    }

    public String getProvince() {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/province";
        return GHNUltils.getResponse(restTemplate, token, null, url, "").getBody();
    }

    public String getDistrict(int province_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/district";
        return GHNUltils.getResponse(restTemplate, token, null, url, Map.of("province_id", province_id)).getBody();
    }

    public String getWard(int district_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id";
        return GHNUltils.getResponse(restTemplate, token, null, url, Map.of("district_id", district_id)).getBody();
    }

    public String createStore(GHNStoreRegistRequest ghnModel) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shop/register";
        ObjectMapper mapper = new ObjectMapper();
        Map<String, Object> map;
        try {
            map = mapper.readValue(GHNUltils.getResponse(restTemplate, token, null, url, ghnModel).getBody(),
                    Map.class);
            if (map.get("message").toString().equals("Success")) {
                return (map.get("data").toString().split("=")[1].replace("}", ""));
            }
        } catch (Exception e) {
        }
        return null;

    }

    public String getGen(String[] order_id) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/a5/gen-token";
        return GHNUltils.getResponse(restTemplate, token, null, url, Map.of("order_codes", order_id)).getBody();
    }

    public String printOrder(String[] order_id) {
        // System.out.println(getGen(order_id));
        String url = "https://online-gateway.ghn.vn/a5/public-api/print52x70?token="
                + "6ce4b6da-07e5-11ed-80c9-360847801e43";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Token", token);
        headers.set("ShopId", null);
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET,
                entity, String.class);
        return response.getBody();
    }

    public GHNServiceResponse getServiceType(Addrress shopAddrress, Addrress customerAddrress) {
        GHNServiceRequest ghnServiceRequest = new GHNServiceRequest(Integer.parseInt(shopAddrress.getId()),
                shopAddrress.getDistrictId1(),
                customerAddrress.getDistrictId1());
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services";
        return (GHNServiceResponse) SubUtils.jsonToObject(
                GHNUltils.getResponse(restTemplate, token, null, url, ghnServiceRequest).getBody(),
                new GHNServiceResponse());
    }

    public List<GHNServiceTypeResponse> getServiceType(List<CartItemResponse> cartItemDTOsItemResponses) {
        Map<Integer, List<ProductResponse>> mapProductByIdShop = convertToMapProduct(cartItemDTOsItemResponses);
        List<GHNServiceTypeResponse> ghnServiceTypeResponses = new ArrayList<>();
        mapProductByIdShop.forEach((key, value) -> {
            Shop shop = shopRepository.findById(key).get();
            Customer customer = customerRepository.findById(SubUtils.getCurrentUser().getId()).get();
            List<GHNServiceModel> ghnServiceModels = new ArrayList<>();
            for (GHNServiceModel cartItemResponse : getServiceType(shop.getAddress(), customer.getAddress())
                    .getData()) {
                ghnServiceModels.add(cartItemResponse);
            }
            ghnServiceTypeResponses.add(
                    new GHNServiceTypeResponse((ShopDTO) SubUtils.mapperObject(shop, new ShopDTO()), ghnServiceModels));
        });
        return ghnServiceTypeResponses;

    }

    public GHNCalFeeResponse calculateFee(GHNCalFeeRequest ghnCalFeeRequest, String shopId) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";
        return (GHNCalFeeResponse) SubUtils.jsonToObject(
                GHNUltils.getResponse(restTemplate, token, shopId, url, ghnCalFeeRequest).getBody(),
                new GHNCalFeeResponse());
    }

    public String createOrder(GHNOrderCreateRequest ghnOrderCreateRequest, String shopId) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create";
        return GHNUltils.getResponse(restTemplate, token, shopId, url, ghnOrderCreateRequest).getBody();
    }

    public String cancelOrder(String order_code,String shopId ) {
        String url = "https://online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel";
        return GHNUltils.getResponse(restTemplate, token, shopId, url, Map.of("order_codes", new String[]{order_code})).getBody();
    }

    public Map<Integer, List<ProductResponse>> convertToMapProduct(List<CartItemResponse> cartItemDTOsItemResponses) {
        Map<Integer, List<ProductResponse>> mapProductByIdShop = new HashMap<>();
        for (CartItemResponse cartItemResponse : cartItemDTOsItemResponses) {
            Integer key = cartItemResponse.getproduct().getIdShop();
            List<ProductResponse> list = mapProductByIdShop.get(key);
            ProductResponse productResponse = cartItemResponse.getproduct();
            productResponse.setQuantity(cartItemResponse.getQuantity());
            try {
                list.add(productResponse);
                mapProductByIdShop.replace(key, list);
            } catch (Exception e) {
                list = new ArrayList<>(Arrays.asList(productResponse));
                mapProductByIdShop.put(key, list);
            }
        }
        return mapProductByIdShop;

    }

    public Map<Integer, String> calculateFee(CalFeeRequest calFeeRequest) {
        List<CartItemResponse> cartItemDTOsItemResponses = calFeeRequest.getCartItemDTOsItemResponses();
        List<GHNServiceTypeRequest> ghnServiceTypeRequests = calFeeRequest.getGhnServiceTypeRequests();
        Map<Integer, List<ProductResponse>> mapProductByIdShop = convertToMapProduct(cartItemDTOsItemResponses);
        Map<Integer, String> result = new HashMap<>();

        mapProductByIdShop.forEach((key, value) -> {
            Shop shop = shopRepository.findById(key).get();
            Customer customer = customerRepository.findById(SubUtils.getCurrentUser().getId()).get();
            Map<Integer, GHNServiceModel> mapServiceByIdShop = new HashMap<>();
            for (GHNServiceTypeRequest ghnServiceTypeRequest : ghnServiceTypeRequests) {
                if (shop.getIdShop().equals(ghnServiceTypeRequest.getShopDTO().getIdShop())) {
                    mapServiceByIdShop.put(shop.getIdShop(),
                            (GHNServiceModel) SubUtils.mapperObject(ghnServiceTypeRequest.getGhnServiceModels(),
                                    new GHNServiceModel()));
                }
            }
            for (ProductResponse productResponse : value) {
                GHNCalFeeRequest ghnCalFeeRequest = new GHNCalFeeRequest(shop.getAddress().getDistrictId1(),
                        mapServiceByIdShop.get(shop.getIdShop()).getService_id(),
                        mapServiceByIdShop.get(shop.getIdShop()).getService_type_id(),
                        customer.getAddress().getDistrictId1(), 50 + (productResponse.getQuantity() * 5), 20, 200, 20,
                        10000,
                        customer.getAddress().getWardCode1() + "", null);
                result.put(productResponse.getIdProduct(),
                        calculateFee(ghnCalFeeRequest, shop.getAddressId() + "").getData().getTotal() + "-"
                                + mapServiceByIdShop.get(shop.getIdShop()).getService_id() + "-"
                                + mapServiceByIdShop.get(shop.getIdShop()).getService_type_id());
            }

        });

        return result;
    }

}
