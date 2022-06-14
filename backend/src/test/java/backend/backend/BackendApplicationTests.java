package backend.backend;

import java.util.Arrays;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import backend.backend.persitence.entities.Category;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.CategoryRepository;
import backend.backend.services.entityService.SingleProductPageService;

@RunWith(SpringRunner.class)

@SpringBootTest
class BackendApplicationTests {
	@Autowired
	SingleProductPageService singleProductPageService;

	@Autowired
	CategoryRepository categoryRepository;

	@Test
	@Transactional
	void test1() {
		Category category = categoryRepository.findByName("Áo").get();
		List<SingleProductPage> result = category.getListOfSingleProductPageFromChild();
		System.out.println(Arrays.toString(result.toArray()));
	}
}
