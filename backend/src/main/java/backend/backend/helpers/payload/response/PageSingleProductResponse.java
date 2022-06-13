package backend.backend.helpers.payload.response;

import java.util.List;

public class PageSingleProductResponse {
    List<SingleProductPageResponse> page;
    int totalPage;

    public List<SingleProductPageResponse> getPage() {
        return this.page;
    }

    public void setPage(List<SingleProductPageResponse> page) {
        this.page = page;
    }

    public int getTotalPage() {
        return this.totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

}
