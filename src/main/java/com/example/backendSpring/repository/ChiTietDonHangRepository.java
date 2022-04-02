package com.example.backendSpring.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.backendSpring.model.ChiTietDonHang;

public interface ChiTietDonHangRepository extends JpaRepository<ChiTietDonHang, Long>{
	@Modifying
	@Transactional
	@Query(value = "insert into chi_tiet_don_hang(ma_ddh, so_luong, ma_sp) values(?, ?, ?)", nativeQuery = true)
	void createDetailOrder(long maDDH, long soLuong, long maSP);
}
