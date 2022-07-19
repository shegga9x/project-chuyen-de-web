package backend.backend.helpers.payload.response;

import java.util.Date;

public class EvaluateReplyResponse {
    private int idEvaluateReply;
    private int idEvaluate;
    private int ididShop;
    private Date dateCreate;
    private Date dateUpdate;
    private String content;

    public int getIdEvaluateReply() {
        return idEvaluateReply;
    }

    public void setIdEvaluateReply(int idEvaluateReply) {
        this.idEvaluateReply = idEvaluateReply;
    }

    public int getIdEvaluate() {
        return idEvaluate;
    }

    public void setIdEvaluate(int idEvaluate) {
        this.idEvaluate = idEvaluate;
    }

    public int getIdidShop() {
        return ididShop;
    }

    public void setIdidShop(int ididShop) {
        this.ididShop = ididShop;
    }

    public Date getDateCreate() {
        return dateCreate;
    }

    public void setDateCreate(Date dateCreate) {
        this.dateCreate = dateCreate;
    }

    public Date getDateUpdate() {
        return dateUpdate;
    }

    public void setDateUpdate(Date dateUpdate) {
        this.dateUpdate = dateUpdate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
