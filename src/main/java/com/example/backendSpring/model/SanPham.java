package com.example.backendSpring.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "SanPham")
public class SanPham {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ma_sp")
	private long maSp;

	@Column(name = "ten_sp")
	private String tenSp;

	@Column(name = "gia")
	private long gia;

	@Column(name = "mo_ta", length = 4096)
	private String moTa;

	@Column(name = "hinh_anh")
	private String hinhAnh;

	@Column(name = "sao")
	private double sao;

	@Column(name = "status")
	private int status;

	@Column(name = "so_luong_ban")
	private long soLuongBan = 0;

	@ManyToOne
	@JoinColumn(name = "ma_pl", nullable = false)
	private PhanLoai phanLoai;

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "sanPhamYeuThich")
	private Set<KhachHang> khachHangYeuThich = new HashSet<>();

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sanPham")
	private Set<ChiTietDonHang> chiTietDonHang = new HashSet<>();

	@OneToMany(targetEntity = Review.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "ma_sp", referencedColumnName = "ma_sp")
	private List<Review> cacReview;

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sanPham")
	private Set<ChiTietGioHang> chiTietGioHang = new HashSet<>();

	public long getMaSp() {
		return maSp;
	}

	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getTenSp() {
		return tenSp;
	}

	public void setTenSp(String tenSp) {
		this.tenSp = tenSp;
	}

	public long getGia() {
		return this.gia;
	}

	public void setGia(long gia) {
		this.gia = gia;
	}

	public String getMoTa() {
		return moTa;
	}

	public void setMoTa(String moTa) {
		this.moTa = moTa;
	}

	public String getHinhAnh() {
		return hinhAnh;
	}

	public void setHinhAnh(String hinhAnh) {
		this.hinhAnh = hinhAnh;
	}

	public void setMaSp(long maSp) {
		this.maSp = maSp;
	}

	public PhanLoai getPhanLoai() {
		return this.phanLoai;
	}

	public List<Review> getCacReview() {
		return this.cacReview;
	}

	public void setCacReview(List<Review> cacReview) {
		this.cacReview = cacReview;
	}

	public void setPhanLoai(PhanLoai phanLoai) {
		this.phanLoai = phanLoai;
	}

	public Set<KhachHang> getKhachHangYeuThich() {
		return this.khachHangYeuThich;
	}

	public void setKhachHangYeuThich(Set<KhachHang> khachHangYeuThich) {
		this.khachHangYeuThich = khachHangYeuThich;
	}

	public Set<ChiTietDonHang> getChiTietDonHang() {
		return this.chiTietDonHang;
	}

	public void setChiTietDonHang(Set<ChiTietDonHang> chiTietDonHang) {
		this.chiTietDonHang = chiTietDonHang;
	}

	public Set<ChiTietGioHang> getChiTietGioHang() {
		return this.chiTietGioHang;
	}

	public void setChiTietGioHang(Set<ChiTietGioHang> chiTietGioHang) {
		this.chiTietGioHang = chiTietGioHang;
	}

	public double getSao() {
		return sao;
	}

	public void setSao(double sao) {
		this.sao = sao;
	}

	public long getSoLuongBan() {
		return this.soLuongBan;
	}

	public void setSoLuongBan(long soLuongBan) {
		this.soLuongBan = soLuongBan;
	}

}
