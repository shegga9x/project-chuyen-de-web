package backend.backend.helpers.payload.response;

public class EvaluateResponse {
    private int idEvaluate;
    private int idSingleProductPage;
    private int idCustomer;
    private String nameCustomer;
    private String dateCreate;
    private String dateUpdate;
    private int likeCount;
    private int rateStar;
    private String content;

    public int getIdEvaluate() {
        return idEvaluate;
    }

    public void setIdEvaluate(int idEvaluate) {
        this.idEvaluate = idEvaluate;
    }

    public int getIdSingleProductPage() {
        return idSingleProductPage;
    }

    public void setIdSingleProductPage(int idSingleProductPage) {
        this.idSingleProductPage = idSingleProductPage;
    }

    public int getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(int idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(String dateCreate) {
        this.dateCreate = dateCreate;
    }

    public String getDateUpdate() {
        return dateUpdate;
    }

    public void setDateUpdate(String dateUpdate) {
        this.dateUpdate = dateUpdate;
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
