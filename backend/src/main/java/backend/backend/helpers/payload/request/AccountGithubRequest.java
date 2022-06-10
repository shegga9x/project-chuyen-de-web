package backend.backend.helpers.payload.request;

public class AccountGithubRequest {
    String providerId;
    String name;
    String email;
    String imgUrl;
    String provider;

    public AccountGithubRequest(String providerId, String name, String email, String imgUrl) {
        this.providerId = providerId;
        this.name = name;
        this.email = email;
        this.imgUrl = imgUrl;
        this.provider = "github";
    }

    public String getProviderId() {
        return providerId;
    }

    public void setProviderId(String providerId) {
        this.providerId = providerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }
}
