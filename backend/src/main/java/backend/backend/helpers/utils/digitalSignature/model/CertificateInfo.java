package backend.backend.helpers.utils.digitalSignature.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class CertificateInfo {

    public String issuerDN;
    public String subjectDN;

    public Date notValidBefore;
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
