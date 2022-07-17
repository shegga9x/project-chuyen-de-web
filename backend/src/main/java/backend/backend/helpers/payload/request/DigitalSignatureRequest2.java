package backend.backend.helpers.payload.request;

public class DigitalSignatureRequest2 {
    private String hash;
    private String decry;
    private String mode;
    private String padding;
    private String base64FileData;
    private String base64FileEncry;

    public DigitalSignatureRequest2() {
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public String getDecry() {
        return decry;
    }

    public void setDecry(String decry) {
        this.decry = decry;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public String getPadding() {
        return padding;
    }

    public void setPadding(String padding) {
        this.padding = padding;
    }

    public String getBase64FileData() {
        return base64FileData;
    }

    public void setBase64FileData(String base64FileData) {
        this.base64FileData = base64FileData;
    }

    public String getBase64FileEncry() {
        return base64FileEncry;
    }

    public void setBase64FileEncry(String base64FileEncry) {
        this.base64FileEncry = base64FileEncry;
    }

    @Override
    public String toString() {
        return "DigitalSignatureRequest2{" +
                "hash='" + hash + '\'' +
                ", decry='" + decry + '\'' +
                ", mode='" + mode + '\'' +
                ", padding='" + padding + '\'' +
                ", base64FileData='" + base64FileData + '\'' +
                ", base64FileEncry='" + base64FileEncry + '\'' +
                '}';
    }
}
