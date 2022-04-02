package com.example.backendSpring.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PhanLoai")
public class PhanLoai {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ma_pl")
	private long maPl;

	@Column(name = "mau_sac")
	@ElementCollection(targetClass = String.class)
	private Set<String> mauSac;

	// Store list of kich_thuoc in database`
	@Column(name = "kich_co")
	@ElementCollection(targetClass = String.class)
	private Set<String> kichCo;

	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "cacPhanLoai")
	private Set<SanPham> cacSanPham = new HashSet<>();

	public long getMaPl() {
		return this.maPl;
	}

	public void setMaPl(long maPl) {
		this.maPl = maPl;
	}

	public Set<String> getMauSac() {
		return this.mauSac;
	}

	public void setMauSac(Set<String> mauSac) {
		this.mauSac = mauSac;
	}

	public Set<String> getKichCo() {
		return this.kichCo;
	}

	public void setKichCo(Set<String> kichCo) {
		this.kichCo = kichCo;
	}

	public Set<SanPham> getCacSanPham() {
		return this.cacSanPham;
	}

	public void setCacSanPham(Set<SanPham> cacSanPham) {
		this.cacSanPham = cacSanPham;
	}

}
