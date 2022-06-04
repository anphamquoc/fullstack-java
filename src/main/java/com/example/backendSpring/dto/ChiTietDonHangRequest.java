package com.example.backendSpring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ChiTietDonHangRequest {
	private long maDDH;
	private long soLuong;

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

	// public ChiTietDonHangRequest(long maDDH, long soLuong) {
	// this.maDDH = maDDH;
	// this.soLuong = soLuong;
	// }
}
