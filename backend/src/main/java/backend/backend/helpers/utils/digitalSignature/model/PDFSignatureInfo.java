package backend.backend.helpers.utils.digitalSignature.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class PDFSignatureInfo {

    public Map<String, Object> entries = new HashMap<>();

    public String reason;
    public String name;
    public String subFilter;
    public String filter;
    public String contactInfo;
    public String location;

    public Date signDate;

    public boolean coversWholeDocument;
    public boolean isSelfSigned;

    public String signatureVerified;

    public CertificateInfo certificateInfo;

    public Map<String,Object> getEntries() {
        return this.entries;
    }

    public void setEntries(Map<String,Object> entries) {
        this.entries = entries;
    }

    public String getReason() {
        return this.reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSubFilter() {
        return this.subFilter;
    }

    public void setSubFilter(String subFilter) {
        this.subFilter = subFilter;
    }

    public String getFilter() {
        return this.filter;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }

    public String getContactInfo() {
        return this.contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getSignDate() {
        return this.signDate;
    }

    public void setSignDate(Date signDate) {
        this.signDate = signDate;
    }

    public boolean isCoversWholeDocument() {
        return this.coversWholeDocument;
    }

    public boolean getCoversWholeDocument() {
        return this.coversWholeDocument;
    }

    public void setCoversWholeDocument(boolean coversWholeDocument) {
        this.coversWholeDocument = coversWholeDocument;
    }

    public boolean isIsSelfSigned() {
        return this.isSelfSigned;
    }

    public boolean getIsSelfSigned() {
        return this.isSelfSigned;
    }

    public void setIsSelfSigned(boolean isSelfSigned) {
        this.isSelfSigned = isSelfSigned;
    }

    public String getSignatureVerified() {
        return this.signatureVerified;
    }

    public void setSignatureVerified(String signatureVerified) {
        this.signatureVerified = signatureVerified;
    }

    public CertificateInfo getCertificateInfo() {
        return this.certificateInfo;
    }

    public void setCertificateInfo(CertificateInfo certificateInfo) {
        this.certificateInfo = certificateInfo;
    }

    @Override
    public String toString() {
        return "{" +
                " entries='" + getEntries() + "'" +
                ", reason='" + getReason() + "'" +
                ", name='" + getName() + "'" +
                ", subFilter='" + getSubFilter() + "'" +
                ", filter='" + getFilter() + "'" +
                ", contactInfo='" + getContactInfo() + "'" +
                ", location='" + getLocation() + "'" +
                ", signDate='" + getSignDate() + "'" +
                ", coversWholeDocument='" + isCoversWholeDocument() + "'" +
                ", isSelfSigned='" + isIsSelfSigned() + "'" +
                ", signatureVerified='" + getSignatureVerified() + "'" +
                ", certificateInfo='" + getCertificateInfo() + "'" +
                "}";
    }

}
