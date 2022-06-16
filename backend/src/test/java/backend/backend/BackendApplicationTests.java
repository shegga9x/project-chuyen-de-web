package backend.backend;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import backend.backend.helpers.payload.dto.CategoryDto;
import backend.backend.helpers.payload.response.CustomSinglePage;
import backend.backend.persitence.entities.Category;
import backend.backend.persitence.entities.Product;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.CategoryRepository;
import backend.backend.persitence.repository.ProductRepository;
import backend.backend.persitence.repository.SingleProductPageRepository;
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
		CustomSinglePage test = new CustomSinglePage(singleProductPage.get().getIdSingleProductPage(),
				singleProductPage.get().getName(), singleProductPage.get().getDescription(),
				singleProductPage.get().getPriceRange(), singleProductPage.get().getTotalSoldCount(),
				singleProductPage.get().getTotalQuantity());
		System.out.println(test);
	}

	@Test
	@Transactional
	void test6() {
		List<Product> list = productRepository.findByIdSingleProductPage(1);
		System.out.println(list.size());
	}
}
