package backend.backend.helpers.payload.response;

import java.util.List;

import backend.backend.helpers.payload.dto.SingleProductPageDTO;

public class PageSingleProductResponse {
    List<SingleProductPageDTO> page;
    int totalPage;

    public List<SingleProductPageDTO> getPage() {
        return this.page;
    }

    public void setPage(List<SingleProductPageDTO> page) {
        this.page = page;
    }

    public int getTotalPage() {
        return this.totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

}
