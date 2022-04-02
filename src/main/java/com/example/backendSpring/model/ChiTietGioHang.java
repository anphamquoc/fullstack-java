package com.example.backendSpring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ChiTietGioHang")
public class ChiTietGioHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_ctgh")
    private long maCTGH;

    @Column(name = "ma_gh")
    private long maGH;

    @Column(name = "so_luong")
    private long soLuong;

    @ManyToOne
    @JoinColumn(name = "ma_sp", nullable = false)
    private SanPham sanPham;

    public long getMaCTGH() {
        return this.maCTGH;
    }

    public void setMaCTGH(long maCTGH) {
        this.maCTGH = maCTGH;
    }

    public long getMaGH() {
        return this.maGH;
    }

    public void setMaGH(long maGH) {
        this.maGH = maGH;
    }

    public long getSoLuong() {
        return this.soLuong;
    }

    public void setSoLuong(long soLuong) {
        this.soLuong = soLuong;
    }

    public SanPham getSanPham() {
        return this.sanPham;
    }

    public void setSanPham(SanPham sanPham) {
        this.sanPham = sanPham;
    }

}
