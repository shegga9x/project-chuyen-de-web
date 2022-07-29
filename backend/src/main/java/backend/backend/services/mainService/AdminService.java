package backend.backend.services.mainService;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.dto.SingleProductPageDTO;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.SingleProductPageRepository;

@Service
public class AdminService {

    @Autowired
    private SingleProductPageRepository singleProductPageRepository;

    public List<SingleProductPageDTO> getAllSingleProductPage() {
        List<SingleProductPage> list = singleProductPageRepository.findAll();
        List<SingleProductPageDTO> result = list.stream().map(ele -> (SingleProductPageDTO) SubUtils.mapperObject(ele, new SingleProductPageDTO())).collect(Collectors.toList());
        return result;
    }

    public List<SingleProductPageDTO> duyetSanPham(int idSinglePage) {
        SingleProductPage singleProductPage = singleProductPageRepository.findByIdSingleProductPage(idSinglePage).get();
        singleProductPage.setStatus((byte) 1);
        singleProductPageRepository.save(singleProductPage);
        return getAllSingleProductPage();
    }
}
