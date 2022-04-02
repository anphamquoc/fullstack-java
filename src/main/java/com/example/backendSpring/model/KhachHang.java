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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "KhachHang")
public class KhachHang {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ma_kh")
	private long maKh;

	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	@Column(name = "ho_ten")
	private String hoTen;

	@Column(name = "dia_chi")
	private String dChi;

	@Column(name = "so_dt")
	private String soDt;

	@Column(name = "email")
	private String email;

	@OneToMany(targetEntity = DonDatHang.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "ma_kh", referencedColumnName = "ma_kh")
	private List<DonDatHang> cacDonDatHang;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "YeuThich", joinColumns = { @JoinColumn(name = "ma_kh") }, inverseJoinColumns = {
			@JoinColumn(name = "ma_sp") })
	private Set<SanPham> sanPhamYeuThich = new HashSet<>();

	@OneToOne(mappedBy = "khachHang", cascade = CascadeType.ALL)
	private GioHang gioHang;

	public long getMaKh() {
		return maKh;
	}

	public void setMaKh(long maKh) {
		this.maKh = maKh;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getHoTen() {
		return hoTen;
	}

	public void setHoTen(String hoTen) {
		this.hoTen = hoTen;
	}

	public String getSoDt() {
		return soDt;
	}

	public void setSoDt(String soDt) {
		this.soDt = soDt;
	}

	public List<DonDatHang> getCacDonDatHang() {
		return cacDonDatHang;
	}

	public void setCacDonDatHang(List<DonDatHang> cacDonDatHang) {
		this.cacDonDatHang = cacDonDatHang;
	}

	public Set<SanPham> getSanPhamYeuThich() {
		return sanPhamYeuThich;
	}

	public void setSanPhamYeuThich(Set<SanPham> sanPhamYeuThich) {
		this.sanPhamYeuThich = sanPhamYeuThich;
	}

	public String getDChi() {
		return this.dChi;
	}

	public void setDChi(String dChi) {
		this.dChi = dChi;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public GioHang getGioHang() {
		return this.gioHang;
	}

	public void setGioHang(GioHang gioHang) {
		this.gioHang = gioHang;
	}

}
