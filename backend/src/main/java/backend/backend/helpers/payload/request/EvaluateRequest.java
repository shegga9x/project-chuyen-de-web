package backend.backend.helpers.payload.request;

public class EvaluateRequest {
    private int idSingleProductPage;
    private int likeCount;
    private int rateStar;
    private String content;

    public int getIdSingleProductPage() {
        return idSingleProductPage;
    }

    public void setIdSingleProductPage(int idSingleProductPage) {
        this.idSingleProductPage = idSingleProductPage;
    }

    public int getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(int likeCount) {
        this.likeCount = likeCount;
    }

    public int getRateStar() {
        return rateStar;
    }

    public void setRateStar(int rateStar) {
        this.rateStar = rateStar;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
