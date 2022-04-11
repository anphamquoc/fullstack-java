package com.example.backendSpring.dto;

public class KhachHangUpdateRequest {
    private String hoTen;
    private String diaChi;
    private String soDt;
    private String email;

    public String getHoTen() {
        return this.hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public String getDiaChi() {
        return this.diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public String getSoDt() {
        return this.soDt;
    }

    public void setSoDt(String soDt) {
        this.soDt = soDt;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
