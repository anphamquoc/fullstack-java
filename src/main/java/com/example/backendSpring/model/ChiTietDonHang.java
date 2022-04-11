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
@Table(name = "ChiTietDonHang")
public class ChiTietDonHang {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ma_ctdh")
	private long maCTHD;

	@Column(name = "ma_ddh")
	private long maDDH;

	@Column(name = "so_luong")
	private long soLuong;

	@ManyToOne
	@JoinColumn(name = "ma_sp", nullable = false)
	private SanPham sanPham;

	public long getMaCTHD() {
		return maCTHD;
	}

	public void setMaCTHD(long maCTHD) {
		this.maCTHD = maCTHD;
	}

	public long getMaDDH() {
		return maDDH;
	}

	public void setMaDDH(long maDDH) {
		this.maDDH = maDDH;
	}

	public long getSoLuong() {
		return soLuong;
	}

	public void setSoLuong(long soLuong) {
		this.soLuong = soLuong;
	}

	public SanPham getSanPham() {
		return sanPham;
	}

	public void setSanPham(SanPham sanPham) {
		this.sanPham = sanPham;
	}

}
