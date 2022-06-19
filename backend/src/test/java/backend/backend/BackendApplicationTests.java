package backend.backend;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import backend.backend.helpers.payload.response.CartItemResponse;
import backend.backend.helpers.payload.response.ProductResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.*;
import backend.backend.persitence.repository.*;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import backend.backend.helpers.payload.dto.CategoryDto;
import backend.backend.helpers.payload.response.CustomSinglePage;
import backend.backend.services.entityService.SingleProductPageService;

@RunWith(SpringRunner.class)

@SpringBootTest
class BackendApplicationTests {
    @Autowired
    SingleProductPageService singleProductPageService;
    @Autowired
    SingleProductPageRepository singleProductPageRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CartItemRepository cartItemRepository;
    @Autowired
    OrderItemRepository orderItemRepository;

    @Test
    @Transactional
    void test1() {
        Category category = categoryRepository.findByName("Áo").get();
        List<SingleProductPage> result = category.getListOfSingleProductPageFromChild();
        System.out.println(Arrays.toString(result.toArray()));
    }

    @Test
    @Transactional
    void test2() {
        List<Category> categories = categoryRepository.findByIdCategoryParent(null);
        List<CategoryDto> categoryDtos = new ArrayList<>();
        for (Category category : categories) {
            CategoryDto categoryDto = new CategoryDto(category.getIdCategory(), category.getName(), new ArrayList<>());
            categoryDtos.add(category.getListOfCategoryFromChildZ(categoryDto));
        }
    }

    @Test
    @Transactional
    void test3() {
        Integer[] catagory = new Integer[2];
        catagory[0] = 53;
        catagory[1] = 57;
        List<SingleProductPage> allProductsOnThisPage = singleProductPageRepository.findByIdCategoryIn(catagory);
        for (SingleProductPage singleProductPage : allProductsOnThisPage) {
            System.out.println(singleProductPage.getName());
        }
    }

    @Test
    @Transactional
    void test4() {
        List<SingleProductPage> listSingleProduct = singleProductPageRepository.findAll();
        List<String> result = new ArrayList<>();
        for (SingleProductPage productPage : listSingleProduct) {
            result.add(productPage.getIdSingleProductPage().toString());
        }
        System.out.println(result);
    }

    @Test
    @Transactional
    void test5() {
        Optional<SingleProductPage> singleProductPage = singleProductPageRepository.findByIdSingleProductPage(1);
        CustomSinglePage test = new CustomSinglePage(singleProductPage.get().getIdSingleProductPage(), singleProductPage.get().getIdCategory(),
                singleProductPage.get().getName(), singleProductPage.get().getDescription(),
                singleProductPage.get().getPriceRange(), singleProductPage.get().getTotalSoldCount(),
                singleProductPage.get().getTotalQuantity());
        System.out.println(test);
    }

    @Test
    @Transactional
    void test6() {
        List<Product> list = productRepository.findByIdSingleProductPage(1);
        List<ProductResponse> l = new ArrayList<>();
        for (Product product : list) {
            ProductResponse p = (ProductResponse) SubUtils.mapperObject(product, new ProductResponse());
            l.add(p);
        }
        System.out.println(l);
    }

    @Test
    @Transactional
    void test7() {
        List<OrderItem> listOrderItem = orderItemRepository.findByIdCustomer(1);
        System.out.println(listOrderItem);
        for (OrderItem orderItem : listOrderItem) {
            System.out.println(orderItem);
        }
    }
}
