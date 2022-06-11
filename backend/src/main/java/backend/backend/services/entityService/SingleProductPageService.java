package backend.backend.services.entityService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.backend.helpers.payload.response.SingleProductPageResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.SingleProductPage;
import backend.backend.persitence.repository.SingleProductPageRepository;

@Service
public class SingleProductPageService {
    @Autowired
    SingleProductPageRepository singleProductPageRepository;

    public List<SingleProductPageResponse> loadAll() {
        List<SingleProductPageResponse> responses = new ArrayList<>();
        for (SingleProductPage singleProductPage : singleProductPageRepository.findAll()) {
            responses.add((SingleProductPageResponse) SubUtils.mapperObject(singleProductPage, new SingleProductPageResponse()));
        }
        return responses;

    }
}