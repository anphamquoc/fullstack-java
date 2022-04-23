package com.example.backendSpring.model;

import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "DonDatHang")
public class DonDatHang {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ma_ddh")
	private long maDDH;

	@Column(name = "ho_ten")
	private String hoTen;

	@Column(name = "ma_kh")
	private long maKH;

	@Column(name = "noi_nhan")
	private String noiNhan;

	@Column(name = "soDt")
	private String soDt;

	@Column(name = "email")
	private String email;

	@Column(name = "ngay_dat_hang")
	@CreationTimestamp
	private Timestamp ngayDatHang;

	@Column(name = "tong_tien")
	private long tongTien;

	@Column(name = "trang_thai")
	private String trangThai;

	@Column(name = "phuong_thuc_thanh_toan")
	private String phuongThucThanhToan;

	@OneToMany(targetEntity = ChiTietDonHang.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "ma_ddh", referencedColumnName = "ma_ddh")
	private List<ChiTietDonHang> chiTietDonHang;

	public long getMaDDH() {
		return maDDH;
	}

	public void setMaDDH(long maDDH) {
		this.maDDH = maDDH;
	}

	public String getNoiNhan() {
		return noiNhan;
	}

	public String getHoTen() {
		return this.hoTen;
	}

	public void setHoTen(String hoTen) {
		this.hoTen = hoTen;
	}

	public String getEmail() {
		return this.email;
	}

	public String getPhuongThucThanhToan() {
		return this.phuongThucThanhToan;
	}

	public void setPhuongThucThanhToan(String phuongThucThanhToan) {
		this.phuongThucThanhToan = phuongThucThanhToan;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSoDt() {
		return this.soDt;
	}

	public void setSoDt(String soDt) {
		this.soDt = soDt;
	}

	public void setNoiNhan(String noiNhan) {
		this.noiNhan = noiNhan;
	}

	public Timestamp getNgayDatHang() {
		return this.ngayDatHang;
	}

	public void setNgayDatHang(Timestamp ngayDatHang) {
		this.ngayDatHang = ngayDatHang;
	}

	public long getTongTien() {
		return tongTien;
	}

	public void setTongTien(long tongTien) {
		this.tongTien = tongTien;
	}

	public String getTrangThai() {
		return trangThai;
	}

	public void setTrangThai(String trangThai) {
		this.trangThai = trangThai;
	}

	public long getMaKH() {
		return maKH;
	}

	public void setMaKH(long maKH) {
		this.maKH = maKH;
	}

	public List<ChiTietDonHang> getChiTietDonHang() {
		return chiTietDonHang;
	}

	public void setChiTietDonHang(List<ChiTietDonHang> chiTietDonHang) {
		this.chiTietDonHang = chiTietDonHang;
	}

}
