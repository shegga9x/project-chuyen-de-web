package backend.backend.services.entityService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.dto.CategoryDto;
import backend.backend.helpers.payload.dto.SingleProductPageDTO;
import backend.backend.helpers.payload.response.PageSingleProductResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.Category;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.CategoryRepository;
import backend.backend.persitence.repository.SingleProductPageRepository;

@Service
public class SingleProductPageService {
    @Autowired
    SingleProductPageRepository singleProductPageRepository;
    @Autowired
    CategoryRepository categoryRepository;

    public PageSingleProductResponse loadAll(int page, int size, Integer[] catagory, Integer sorter) {
        sorter = (sorter == null ? 0 : sorter);
        PageSingleProductResponse responses = new PageSingleProductResponse();
        List<SingleProductPageDTO> pageS = new ArrayList<>();
        Page<SingleProductPage> allProductsOnThisPage;
        if (catagory != null) {
            allProductsOnThisPage = singleProductPageRepository.findByIdCategoryIn(catagory,
                    PageRequest.of(page, size, getSortFromSorter(sorter)));
        } else {
            allProductsOnThisPage = singleProductPageRepository
                    .findAll(PageRequest.of(page, size, getSortFromSorter(sorter)));
        }
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

    private Sort getSortFromSorter(int sorter) {
        Sort sort = Sort.by("name");
        switch (sorter) {
            case 1:
                // best selling
                sort = Sort.by("name");
                break;
            case 2:
                // lastest
                sort = Sort.by("idSingleProductPage").descending();
                break;
            case 3:
                // lowest price
                sort = Sort.by("name");
                break;
            case 4:
                // highest price
                sort = Sort.by("name");
                break;
            case 5:
                // best rating
                sort = Sort.by("name");
                break;
            default:
                break;
        }
        return sort;
    }
}