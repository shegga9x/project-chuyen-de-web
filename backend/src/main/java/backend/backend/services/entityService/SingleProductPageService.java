package backend.backend.services.entityService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.response.PageSingleProductResponse;
import backend.backend.helpers.payload.response.SingleProductPageResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.SingleProductPageRepository;

@Service
public class SingleProductPageService {
    @Autowired
    SingleProductPageRepository singleProductPageRepository;

    public PageSingleProductResponse loadAll(int page) {
        PageSingleProductResponse responses = new PageSingleProductResponse();
        List<SingleProductPageResponse> pageS = new ArrayList<>();
        Page<SingleProductPage> allProductsOnThisPage = singleProductPageRepository.findAll(PageRequest.of(page, 5));
        allProductsOnThisPage.getTotalPages();
        for (SingleProductPage singleProductPage : allProductsOnThisPage) {
            pageS.add((SingleProductPageResponse) SubUtils.mapperObject(singleProductPage,
                    new SingleProductPageResponse()));
        }
        responses.setPage(pageS);
        responses.setTotalPage(allProductsOnThisPage.getTotalPages());
        return responses;

    }
}