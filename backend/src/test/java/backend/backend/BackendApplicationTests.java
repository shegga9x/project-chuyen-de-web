package backend.backend;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.services.entityService.SingleProductPageService;

@RunWith(SpringRunner.class)

@SpringBootTest
class BackendApplicationTests {
	@Autowired
	SingleProductPageService singleProductPageService;

	@Test
	@Transactional
	void test1() {
		for (SingleProductPage singleProductPage : singleProductPageService.loadAll()) {
			System.out.println(singleProductPage);
		}
	}
}
