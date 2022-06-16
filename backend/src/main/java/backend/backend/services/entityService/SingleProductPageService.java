package backend.backend.services.entityService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.dto.CategoryDto;
import backend.backend.helpers.payload.dto.SingleProductPageDTO;
import backend.backend.helpers.payload.response.CustomSinglePage;
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
    @Autowired
    // Productre categoryRepository;

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

    private Page<SingleProductPage> getSortFromSorter(Integer sorter, PageRequest pageRequest,
            Integer[] catagory) {
        List<SingleProductPage> list = new ArrayList<>();
        if (catagory != null) {
            list = singleProductPageRepository.findByIdCategoryIn(catagory);
        } else {
            list = singleProductPageRepository.findAll();
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
                singleProductPage.get().getName(), singleProductPage.get().getDescription(),
                singleProductPage.get().getPriceRange(), singleProductPage.get().getTotalSoldCount(),
                singleProductPage.get().getTotalQuantity());
        System.out.println(result);
        return result;
    }


}