package com.example.backendSpring.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "gio_hang")
public class GioHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_gh")
    private long maGH;

    @Column(name = "ma_kh")
    private long maKH;

    @OneToMany(targetEntity = ChiTietGioHang.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "ma_gh", referencedColumnName = "ma_gh")
    private List<ChiTietGioHang> chiTietGioHang;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ma_gh", referencedColumnName = "ma_gh")
    private KhachHang khachHang;

    public long getMaGH() {
        return this.maGH;
    }

    public void setMaGH(long maGH) {
        this.maGH = maGH;
    }

    public long getMaKH() {
        return this.maKH;
    }

    public void setMaKH(long maKH) {
        this.maKH = maKH;
    }

    public List<ChiTietGioHang> getChiTietGioHang() {
        return this.chiTietGioHang;
    }

    public void setChiTietGioHang(List<ChiTietGioHang> chiTietGioHang) {
        this.chiTietGioHang = chiTietGioHang;
    }

    public KhachHang getKhachHang() {
        return this.khachHang;
    }

    public void setKhachHang(KhachHang khachHang) {
        this.khachHang = khachHang;
    }

}
