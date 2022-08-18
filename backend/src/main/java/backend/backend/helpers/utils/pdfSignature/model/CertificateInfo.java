package backend.backend.helpers.utils.pdfSignature.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CertificateInfo {

    public String issuerDN;
    public String subjectDN;
    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date notValidBefore;
    @JsonFormat(pattern = "yyyy-MM-dd")
    public Date notValidAfter;

    public String signAlgorithm;
    public String serial;

    public Map<String, String> issuerOIDs = new HashMap<>();

    public Map<String, String> subjectOIDs = new HashMap<>();

    @Override
    public String toString() {
        return "CertificateInfo{" +
                "issuerDN='" + issuerDN + '\'' +
                ", subjectDN='" + subjectDN + '\'' +
                ", notValidBefore=" + notValidBefore +
                ", notValidAfter=" + notValidAfter +
                ", signAlgorithm='" + signAlgorithm + '\'' +
                ", serial='" + serial + '\'' +
                ", issuerOIDs=" + issuerOIDs +
                ", subjectOIDs=" + subjectOIDs +
                '}';
    }
}
