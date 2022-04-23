package com.example.backendSpring.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "phanLoai")
	private Set<SanPham> cacSanPham = new HashSet<>();

	public long getMaPl() {
		return this.maPl;
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

	public void setMaPl(long maPl) {
		this.maPl = maPl;
	}
}
