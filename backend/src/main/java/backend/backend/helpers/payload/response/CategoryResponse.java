package backend.backend.helpers.payload.response;

public class CategoryResponse {
    int idCategory;
    String name;

    public CategoryResponse() {
    }

    public int getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(int idCategory) {
        this.idCategory = idCategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "CategoryResponse{" +
                "idCategory=" + idCategory +
                ", name='" + name + '\'' +
                '}';
    }
}
