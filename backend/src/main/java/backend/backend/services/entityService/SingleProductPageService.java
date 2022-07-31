package backend.backend.services.entityService;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.dto.CategoryDto;
import backend.backend.helpers.payload.dto.OrderItemDTO;
import backend.backend.helpers.payload.dto.OrderMapValue;
import backend.backend.helpers.payload.dto.SingleProductPageDTO;
import backend.backend.helpers.payload.request.EvaluateRequest;
import backend.backend.helpers.payload.request.ghn.GHNOrderCreateRequest;
import backend.backend.helpers.payload.response.CategoryResponse;
import backend.backend.helpers.payload.response.CustomSinglePage;
import backend.backend.helpers.payload.response.EvaluateReplyResponse;
import backend.backend.helpers.payload.response.EvaluateResponse;
import backend.backend.helpers.payload.response.PageSingleProductResponse;
import backend.backend.helpers.payload.response.ProductResponse;
import backend.backend.helpers.payload.response.SalerOrderItemResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Category;
import backend.backend.persitence.entities.Customer;
import backend.backend.persitence.entities.Evaluate;
import backend.backend.persitence.entities.EvaluateReply;
import backend.backend.persitence.entities.OrderItem;
import backend.backend.persitence.entities.Product;
import backend.backend.persitence.entities.Shop;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.CategoryRepository;
import backend.backend.persitence.repository.CustomerRepository;
import backend.backend.persitence.repository.EvaluateReplyRepository;
import backend.backend.persitence.repository.EvaluateRepository;
import backend.backend.persitence.repository.OrderItemRepository;
import backend.backend.persitence.repository.ProductRepository;
import backend.backend.persitence.repository.ShopRepository;
import backend.backend.persitence.repository.SingleProductPageRepository;
import backend.backend.services.subService.GHNService;

@Service
public class SingleProductPageService {
    @Autowired
    SingleProductPageRepository singleProductPageRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    OrderItemRepository orderRepository;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    EvaluateRepository evaluateRepository;
    @Autowired
    EvaluateReplyRepository evaluateReplyRepository;
    @Autowired
    ShopRepository shopRepository;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    GHNService ghnService;

    public PageSingleProductResponse loadAll(int page, int size, Integer[] catagory, Integer sorter) {
        PageSingleProductResponse responses = new PageSingleProductResponse();
        List<SingleProductPageDTO> pageS = new ArrayList<>();
        Page<SingleProductPage> allProductsOnThisPage = getSortFromSorter(sorter,
                PageRequest.of(page, size), catagory);
        for (SingleProductPage singleProductPage : allProductsOnThisPage) {
            SingleProductPageDTO dto = new SingleProductPageDTO();
            dto.setPriceRange(singleProductPage.getPriceRange());
            dto.setImgURL(singleProductPage.getFirstURLImage());
            pageS.add((SingleProductPageDTO) SubUtils.mapperObject(singleProductPage, dto));

        }
        responses.setPage(pageS);
        responses.setTotalPage(allProductsOnThisPage.getTotalPages());
        return responses;

    }

    public List<CategoryDto> loadCagetory() {
        List<Category> categories = categoryRepository.findByIdCategoryParent(null);
        List<CategoryDto> categoryDtos = new ArrayList<>();
        for (Category category : categories) {
            CategoryDto categoryDto = new CategoryDto(category.getIdCategory(), category.getName(), new ArrayList<>());
            categoryDtos.add(category.getListOfCategoryFromChildZ(categoryDto));
        }
        return categoryDtos;
    }

    public List<String> loadAllSingleProductPage() {
        List<SingleProductPage> listSingleProduct = singleProductPageRepository.findAll();
        List<String> result = new ArrayList<>();
        for (SingleProductPage productPage : listSingleProduct) {
            result.add(productPage.getIdSingleProductPage().toString());
        }
        return result;
    }

    public CustomSinglePage getSingleProductPagePerPage(int idSingleProduct) {
        Optional<SingleProductPage> singleProductPage = singleProductPageRepository
                .findByIdSingleProductPage(idSingleProduct);
        CustomSinglePage result = new CustomSinglePage(singleProductPage.get().getIdSingleProductPage(),
                singleProductPage.get().getIdShop(),
                singleProductPage.get().getIdCategory(),
                singleProductPage.get().getName(), singleProductPage.get().getDescription(),
                singleProductPage.get().getPriceRange(), singleProductPage.get().getTotalSoldCount(),
                singleProductPage.get().getTotalQuantity());
        return result;
    }

    public List<ProductResponse> getListProductBySingleProductPage(int idSingleProduct) {
        List<Product> list = productRepository.findByIdSingleProductPage(idSingleProduct);
        List<ProductResponse> result = new ArrayList<>();
        for (Product product : list) {
            ProductResponse p = (ProductResponse) SubUtils.mapperObject(product, new ProductResponse());
            result.add(p);
        }
        return result;
    }

    public List<CategoryResponse> getListCategoryBySingleProductPage(int idCategory) {
        List<CategoryResponse> result = new ArrayList<>();
        Optional<Category> optional = categoryRepository.findByIdCategory(51);
        if (optional.isPresent()) {
            result.add((CategoryResponse) SubUtils.mapperObject(optional.get(), new CategoryResponse()));
        }
        while (true) {
            optional = categoryRepository.findByIdCategory(optional.get().getIdCategoryParent());
            if (optional.isEmpty()) {
                break;
            }
            result.add((CategoryResponse) SubUtils.mapperObject(optional.get(), new CategoryResponse()));
        }
        Collections.reverse(result);
        return result;
    }

    // saler
    public PageSingleProductResponse productSalerList(Integer idShop, Integer page, Integer size, Integer sorter,
            Integer status) {
        PageSingleProductResponse responses = new PageSingleProductResponse();
        List<SingleProductPageDTO> pageS = new ArrayList<>();
        Page<SingleProductPage> allProductsOnThisPage = getProductSortFromSorterOfSaler(idShop, sorter, status,
                PageRequest.of(page, size));
        for (SingleProductPage singleProductPage : allProductsOnThisPage) {
            SingleProductPageDTO dto = new SingleProductPageDTO();
            pageS.add((SingleProductPageDTO) SubUtils.mapperObject(singleProductPage, dto));
        }
        responses.setPage(pageS);
        responses.setTotalPage(allProductsOnThisPage.getTotalPages());
        return responses;
    }

    @Transactional
    public boolean productSalerUpdate(SingleProductPageDTO singleProductPageDTO) {
        SingleProductPage singleProductPage = (SingleProductPage) SubUtils.mapperObject(singleProductPageDTO,
                new SingleProductPage());
        singleProductPage.setStatus((byte) 3);
        singleProductPage.setIdShop(accountRepository.getById(SubUtils.getCurrentUser().getId()).getShop().getIdShop());

        return (singleProductPageRepository.save(singleProductPage) != null);
    }

    public SalerOrderItemResponse orderSalerList(Integer idShop, Integer page, Integer size, Integer sorter,
            Integer status) {
        SalerOrderItemResponse responses = new SalerOrderItemResponse();
        Map<String, OrderMapValue> map = getOrderSortFromSorterOfSaler1(idShop, sorter, status);
        int lowerBound = page * size;
        int upperBound = Math.min(lowerBound + size - 1, map.size());
        Map<String, OrderMapValue> result = new HashMap<>();
        int i = 0;
        for (Map.Entry<String, OrderMapValue> e : map.entrySet()) {
            if (i >= lowerBound && i <= upperBound) {
                result.put(e.getKey(), e.getValue());
            }
            i++;
        }
        responses.setMap(result);
        responses.setTotalPage((map.size() + size - 1) / size);
        return responses;
    }

    public boolean orderSalerUpdateStatus(OrderItemDTO orderItemDTO) {
        OrderItem orderItem = orderRepository.getById(orderItemDTO.getIdOrderItem());
        orderItem.setStatus(orderItemDTO.getStatus());

        Shop shop = shopRepository.findById(orderItem.getSingleProductPageDTO().getIdShop()).get();
        Customer customer = customerRepository.findById(orderItem.getIdCustomer()).get();
        switch (orderItemDTO.getStatus()) {
            case 2:
                GHNOrderCreateRequest ghnOrderCreateRequest = new GHNOrderCreateRequest(2,
                        200, 20,
                        20, 50 + (orderItemDTO.getQuantity() * 5), 1444, customer.getAddress().getDistrictId1(),
                        10000,
                        orderItem.getServiceId(),
                        orderItem.getServiceTypeId(),
                        null, "Tintest 123", "KHONGCHOXEMHANG", shop.getPhoneNumber(), shop.getAddress().getSubLocate(),
                        shop.getAddress().getDistrictId1() + "",
                        shop.getAddress().getWardCode1() + "",
                        "", customer.getName(), "0938843188", customer.getAddress().getSubLocate(),
                        customer.getAddress().getWardCode1() + "", 200000, "Theo New York Times", new ArrayList<>(),
                        new ArrayList<>());
                JSONObject jsonObj = new JSONObject(
                        ghnService.createOrder(ghnOrderCreateRequest, shop.getAddressId() + ""));
                String orderShipId = jsonObj.getJSONObject("data").getString("order_code");
                orderItem.setOrderShipId(orderShipId);
                System.out.println(orderShipId);

                break;
            case 1:
                ghnService.cancelOrder(orderItem.getOrderShipId(), shop.getAddressId()+"");
                break;
            case 5:
                ghnService.cancelOrder(orderItem.getOrderShipId(), shop.getAddressId()+"");
                break;

            default:
                break;
        }
        return (orderRepository.save(orderItem) != null);
    }

    // Ultil
    private Page<SingleProductPage> getSortFromSorter(Integer sorter, PageRequest pageRequest,
            Integer[] catagory) {
        List<SingleProductPage> list = new ArrayList<>();
        if (catagory != null) {
            list = singleProductPageRepository.findByIdCategoryInAndStatus(catagory, (byte) 1);
        } else {
            list = singleProductPageRepository.findByStatus((byte) 1);
        }
        int lowerBound = pageRequest.getPageNumber() * pageRequest.getPageSize();
        int upperBound = Math.min(lowerBound + pageRequest.getPageSize() - 1, list.size());
        if (sorter == null) {
            return new PageImpl<>(list.subList(lowerBound, upperBound), pageRequest, list.size());
        }
        switch (sorter) {
            case 1:
                // best selling
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getTotalSoldCount().compareTo(o1.getTotalSoldCount())))
                        .collect(Collectors.toList());
                break;
            case 2:
                // lastest
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getLastChildId().compareTo(o1.getLastChildId())))
                        .collect(Collectors.toList());
                break;
            case 3:
                // lowest price
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getLowestPrice().compareTo(o1.getLowestPrice())))
                        .collect(Collectors.toList());
                break;
            case 4:
                // highest price
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getHighestPrice().compareTo(o1.getHighestPrice())))
                        .collect(Collectors.toList());
                break;
            case 5:
                // best rating
                break;
            default:
                break;
        }

        return new PageImpl<>(list.subList(lowerBound, upperBound), pageRequest, list.size());

    }

    private Page<SingleProductPage> getProductSortFromSorterOfSaler(Integer idShop, Integer sorter, Integer status,
            PageRequest pageRequest) {
        List<SingleProductPage> list = new ArrayList<>();
        if (status != null) {
            list = singleProductPageRepository.findByIdShopAndStatus(idShop, (byte) status.byteValue());
        } else {
            list = singleProductPageRepository.findByIdShop(idShop);
        }
        int lowerBound = pageRequest.getPageNumber() * pageRequest.getPageSize();
        int upperBound = Math.min(lowerBound + pageRequest.getPageSize() - 1, list.size());
        if (sorter == null) {
            return new PageImpl<>(list.subList(lowerBound, upperBound), pageRequest, list.size());
        }
        switch (sorter) {
            case 1:
                // best selling
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getTotalSoldCount().compareTo(o1.getTotalSoldCount())))
                        .collect(Collectors.toList());
                break;
            case 2:
                // lastest
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getLastChildId().compareTo(o1.getLastChildId())))
                        .collect(Collectors.toList());
                break;
            case 3:
                // lowest price
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getLowestPrice().compareTo(o1.getLowestPrice())))
                        .collect(Collectors.toList());
                break;
            case 4:
                // highest price
                list = list.stream()
                        .sorted((o1, o2) -> (o2.getHighestPrice().compareTo(o1.getHighestPrice())))
                        .collect(Collectors.toList());
                break;
            case 5:
                // best rating
                break;
            default:
                break;
        }
        return new PageImpl<>(list.subList(lowerBound, upperBound), pageRequest, list.size());
    }

    public Map<String, OrderMapValue> getOrderSortFromSorterOfSaler1(Integer idShop, Integer sorter, Integer status) {
        List<OrderItem> list = new ArrayList<>();
        if (status != null) {
            list = orderRepository.findByIdShopAndStatus(idShop, (byte) status.byteValue());
        } else {
            list = orderRepository.findByIdShop(idShop);
        }
        Map<String, OrderMapValue> map = new HashMap<>();
        for (OrderItem orderItem : list) {
            SingleProductPageDTO singleProductPageDTO = orderItem.getSingleProductPageDTO();
            String key = singleProductPageDTO.getIdSingleProductPage() + "-" + orderItem.getStatus();
            OrderItemDTO orderItemDTO = (OrderItemDTO) SubUtils.mapperObject(orderItem, new OrderItemDTO());
            if (map.containsKey(key)) {
                OrderMapValue value = map.get(key);
                value.setCount(value.getCount() + 1);
                List<OrderItemDTO> itemDTOs = value.getItemDTOs();
                itemDTOs.add(orderItemDTO);
                value.setItemDTOs(itemDTOs);
                map.replace(key, value);
            } else {
                map.put(key, new OrderMapValue(1, new LinkedList<OrderItemDTO>(Arrays.asList(orderItemDTO)),
                        singleProductPageDTO));
            }
        }

        return map;

    }

    // review
    public List<EvaluateResponse> getReviewByIdProduct(int idSingleProductPage) {
        List<Evaluate> evaluateList = evaluateRepository.findByIdSingleProductPage(idSingleProductPage);
        List<EvaluateResponse> result = new ArrayList<>();
        for (Evaluate evaluate : evaluateList) {
            EvaluateResponse evaluateResponse = (EvaluateResponse) SubUtils.mapperObject(evaluate,
                    new EvaluateResponse());
            evaluateResponse.setNameCustomer(accountRepository.getById(evaluateResponse.getIdCustomer()).getEmail());
            evaluateResponse.setDateCreate(new SimpleDateFormat("dd/MM/yyyy").format(evaluate.getDateCreate()));
            evaluateResponse.setDateUpdate(new SimpleDateFormat("dd/MM/yyyy").format(evaluate.getDateUpdate()));
            result.add(evaluateResponse);
        }
        return result;
    }

    public List<EvaluateReplyResponse> getListEvaluateReplyResponse(int idSingleProductPage) {
        List<Evaluate> evaluateList = evaluateRepository.findByIdSingleProductPage(idSingleProductPage);
        List<EvaluateReplyResponse> result = new ArrayList<>();
        for (Evaluate evaluate : evaluateList) {
            EvaluateReply evaluateReply = evaluateReplyRepository.getByIdEvaluate(evaluate.getIdEvaluate());
            if (evaluateReply != null) {
                result.add((EvaluateReplyResponse) SubUtils.mapperObject(evaluateReply, new EvaluateReplyResponse()));
            }
        }
        return result;
    }

    public List<EvaluateResponse> onSubmitReview(EvaluateRequest evaluateRequest) {
        Evaluate evaluate = new Evaluate();
        int idUser = SubUtils.getCurrentUser().getId();
        evaluate.setIdCustomer(idUser);
        evaluate.setIdSingleProductPage(evaluateRequest.getIdSingleProductPage());
        evaluate.setContent(evaluateRequest.getContent());
        evaluate.setLikeCount(evaluateRequest.getLikeCount());
        evaluate.setRateStar((byte) evaluateRequest.getRateStar());
        evaluate.setDateCreate(new Date());
        evaluate.setDateUpdate(new Date());
        evaluateRepository.save(evaluate);
        return getReviewByIdProduct(evaluateRequest.getIdSingleProductPage());
    }

}