package com.example.backendSpring.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "Review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_dg")
    private long maDG;

    @Column(name = "ma_kh")
    private long maKH;

    @Column(name = "ma_sp")
    private long maSP;

    @Column(name = "noi_dung")
    private String noiDung;

    @Column(name = "diem")
    private int diem;

    @Column(name = "ten_nguoi_danh_gia")
    private String tenNguoiDanhGia;

    @Column(name = "ngay_danh_gia")
    @CreationTimestamp
    private Timestamp ngayDG;

    public long getMaDG() {
        return this.maDG;
    }

    public void setMaDG(long maDG) {
        this.maDG = maDG;
    }

    public long getMaKH() {
        return this.maKH;
    }

    public void setMaKH(long maKH) {
        this.maKH = maKH;
    }

    public long getMaSP() {
        return this.maSP;
    }

    public String getTenNguoiDanhGia() {
        return this.tenNguoiDanhGia;
    }

    public void setTenNguoiDanhGia(String tenNguoiDanhGia) {
        this.tenNguoiDanhGia = tenNguoiDanhGia;
    }

    public void setMaSP(long maSP) {
        this.maSP = maSP;
    }

    public String getNoiDung() {
        return this.noiDung;
    }

    public void setNoiDung(String noiDung) {
        this.noiDung = noiDung;
    }

    public int getDiem() {
        return this.diem;
    }

    public void setDiem(int diem) {
        this.diem = diem;
    }

    public Timestamp getNgayDG() {
        return this.ngayDG;
    }

    public void setNgayDG(Timestamp ngayDG) {
        this.ngayDG = ngayDG;
    }

}
