package backend.backend.helpers.payload.dto;

import java.util.List;

public class CategoryDto {
    Integer value;
    String label;
    List<CategoryDto> children;

    public CategoryDto(Integer value, String label, List<CategoryDto> children) {
        this.value = value;
        this.label = label;
        this.children = children;
    }

    public Integer getValue() {
        return this.value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getLabel() {
        return this.label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<CategoryDto> getChildren() {
        return this.children;
    }

    public void setChildren(List<CategoryDto> children) {
        this.children = children;
    }

    @Override
    public String toString() {
        return "{" +
                " value='" + getValue() + "'" +
                ", label='" + getLabel() + "'" +
                ", children='" + getChildren() + "'" +
                "}";
    }

}
