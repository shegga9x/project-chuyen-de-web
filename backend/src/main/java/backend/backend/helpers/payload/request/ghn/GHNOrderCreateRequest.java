package backend.backend.helpers.payload.request.ghn;

import java.util.ArrayList;
import java.util.List;

import backend.backend.persitence.model.ghn.GHNItem;

public class GHNOrderCreateRequest {
    int payment_type_id,
            weight, length, width, height,
            pick_station_id, to_district_id,
            insurance_value, service_id, service_type_id,cod_amount;
    String note, required_note, return_phone,
            return_address, return_district_id,
            return_ward_code, client_order_code,
            to_name, to_phone, to_address,
            to_ward_code, coupon,
            content;
    List<Integer> pick_shift = new ArrayList<>();
    List<GHNItem> items = new ArrayList<>();

    public int getPayment_type_id() {
        return this.payment_type_id;
    }

    public void setPayment_type_id(int payment_type_id) {
        this.payment_type_id = payment_type_id;
    }

    public int getWeight() {
        return this.weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getLength() {
        return this.length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getWidth() {
        return this.width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return this.height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getPick_station_id() {
        return this.pick_station_id;
    }

    public void setPick_station_id(int pick_station_id) {
        this.pick_station_id = pick_station_id;
    }

    public int getTo_district_id() {
        return this.to_district_id;
    }

    public void setTo_district_id(int to_district_id) {
        this.to_district_id = to_district_id;
    }

    public int getInsurance_value() {
        return this.insurance_value;
    }

    public void setInsurance_value(int insurance_value) {
        this.insurance_value = insurance_value;
    }

    public int getService_id() {
        return this.service_id;
    }

    public void setService_id(int service_id) {
        this.service_id = service_id;
    }

    public int getService_type_id() {
        return this.service_type_id;
    }

    public void setService_type_id(int service_type_id) {
        this.service_type_id = service_type_id;
    }

    public String getCoupon() {
        return this.coupon;
    }

    public void setCoupon(String coupon) {
        this.coupon = coupon;
    }

    public String getNote() {
        return this.note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getRequired_note() {
        return this.required_note;
    }

    public void setRequired_note(String required_note) {
        this.required_note = required_note;
    }

    public String getReturn_phone() {
        return this.return_phone;
    }

    public void setReturn_phone(String return_phone) {
        this.return_phone = return_phone;
    }

    public String getReturn_address() {
        return this.return_address;
    }

    public void setReturn_address(String return_address) {
        this.return_address = return_address;
    }

    public String getReturn_district_id() {
        return this.return_district_id;
    }

    public void setReturn_district_id(String return_district_id) {
        this.return_district_id = return_district_id;
    }

    public String getReturn_ward_code() {
        return this.return_ward_code;
    }

    public void setReturn_ward_code(String return_ward_code) {
        this.return_ward_code = return_ward_code;
    }

    public String getClient_order_code() {
        return this.client_order_code;
    }

    public void setClient_order_code(String client_order_code) {
        this.client_order_code = client_order_code;
    }

    public String getTo_name() {
        return this.to_name;
    }

    public void setTo_name(String to_name) {
        this.to_name = to_name;
    }

    public String getTo_phone() {
        return this.to_phone;
    }

    public void setTo_phone(String to_phone) {
        this.to_phone = to_phone;
    }

    public String getTo_address() {
        return this.to_address;
    }

    public void setTo_address(String to_address) {
        this.to_address = to_address;
    }

    public String getTo_ward_code() {
        return this.to_ward_code;
    }

    public void setTo_ward_code(String to_ward_code) {
        this.to_ward_code = to_ward_code;
    }

    public int getCod_amount() {
        return this.cod_amount;
    }

    public void setCod_amount(int cod_amount) {
        this.cod_amount = cod_amount;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<Integer> getPick_shift() {
        return this.pick_shift;
    }

    public void setPick_shift(List<Integer> pick_shift) {
        this.pick_shift = pick_shift;
    }

    public List<GHNItem> getItems() {
        return this.items;
    }

    public void setItems(List<GHNItem> items) {
        this.items = items;
    }

    public GHNOrderCreateRequest(int payment_type_id, int weight, int length, int width, int height,
            int pick_station_id, int to_district_id, int insurance_value, int service_id, int service_type_id,
            String coupon, String note, String required_note, String return_phone, String return_address,
            String return_district_id, String return_ward_code, String client_order_code, String to_name,
            String to_phone, String to_address, String to_ward_code, int cod_amount, String content,
            List<Integer> pick_shift, List<GHNItem> items) {
        this.payment_type_id = payment_type_id;
        this.weight = weight;
        this.length = length;
        this.width = width;
        this.height = height;
        this.pick_station_id = pick_station_id;
        this.to_district_id = to_district_id;
        this.insurance_value = insurance_value;
        this.service_id = service_id;
        this.service_type_id = service_type_id;
        this.coupon = coupon;
        this.note = note;
        this.required_note = required_note;
        this.return_phone = return_phone;
        this.return_address = return_address;
        this.return_district_id = return_district_id;
        this.return_ward_code = return_ward_code;
        this.client_order_code = client_order_code;
        this.to_name = to_name;
        this.to_phone = to_phone;
        this.to_address = to_address;
        this.to_ward_code = to_ward_code;
        this.cod_amount = cod_amount;
        this.content = content;
        this.pick_shift = pick_shift;
        this.items = items;
    }


}
