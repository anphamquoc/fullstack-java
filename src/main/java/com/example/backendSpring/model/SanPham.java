package com.example.backendSpring.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
	private String gia;

	@Column(name = "mo_ta")
	private String moTa;

	@Column(name = "hinh_anh")
	private String hinhAnh;

	@Column(name = "sao")
	private double sao;

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.ALL })
	@JoinTable(name = "PhanLoaiSanPham", joinColumns = { @JoinColumn(name = "id_sp") }, inverseJoinColumns = {
			@JoinColumn(name = "id_pl") })
	private Set<PhanLoai> cacPhanLoai = new HashSet<>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "sanPhamYeuThich")
	private Set<KhachHang> khachHangYeuThich = new HashSet<>();

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sanPham")
	private Set<ChiTietDonHang> chiTietDonHang = new HashSet<>();

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "sanPham")
	private Set<ChiTietGioHang> chiTietGioHang = new HashSet<>();

	public long getMaSp() {
		return maSp;
	}

	public String getTenSp() {
		return tenSp;
	}

	public void setTenSp(String tenSp) {
		this.tenSp = tenSp;
	}

	public String getGia() {
		return gia;
	}

	public void setGia(String gia) {
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

	public Set<PhanLoai> getCacPhanLoai() {
		System.out.println(cacPhanLoai.toString());
		return cacPhanLoai;
	}

	public double getSao() {
		return sao;
	}

	public void setSao(double sao) {
		this.sao = sao;
	}

	// public Set<DonDatHang> getCacDonDatHang() {
	// return cacDonDatHang;
	// }
	//
	// public void setCacDonDatHang(Set<DonDatHang> cacDonDatHang) {
	// this.cacDonDatHang = cacDonDatHang;
	// }

	// public Set<KhachHang> getKhachHangYeuThich() {
	// return khachHangYeuThich;
	// }
	//
	// public void setKhachHangYeuThich(Set<KhachHang> khachHangYeuThich) {
	// this.khachHangYeuThich = khachHangYeuThich;
	// }

}
