package backend.backend.helpers.payload.response;

public class CustomSinglePage {

    int idSingleProductPage;
    String name;
    String description;
    String priceRange;
    int totalSoldCount;
    int totalQuantity;

    public CustomSinglePage(int idSingleProductPage, String name, String description, String priceRange,
            int totalSoldCount, int totalQuantity) {
        this.idSingleProductPage = idSingleProductPage;
        this.name = name;
        this.description = description;
        this.priceRange = priceRange;
        this.totalSoldCount = totalSoldCount;
        this.totalQuantity = totalQuantity;
    }

    public int getIdSingleProductPage() {
        return idSingleProductPage;
    }

    public void setIdSingleProductPage(int idSingleProductPage) {
        this.idSingleProductPage = idSingleProductPage;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriceRange() {
        return priceRange;
    }

    public void setPriceRange(String priceRange) {
        this.priceRange = priceRange;
    }

    public int getTotalSoldCount() {
        return totalSoldCount;
    }

    public void setTotalSoldCount(int totalSoldCount) {
        this.totalSoldCount = totalSoldCount;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(int totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    @Override
    public String toString() {
        return "CustomSinglePage [description=" + description + ", idSingleProductPage=" + idSingleProductPage
                + ", name=" + name + ", priceRange=" + priceRange + ", totalQuantity=" + totalQuantity
                + ", totalSoldCount=" + totalSoldCount + "]";
    }

}
