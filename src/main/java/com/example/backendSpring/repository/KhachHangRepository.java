package com.example.backendSpring.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.backendSpring.model.KhachHang;

public interface KhachHangRepository extends JpaRepository<KhachHang, Long> {
	@Query("select k from KhachHang k where k.username = ?1")
	KhachHang findByUsername(String username);

	@Modifying
	@Transactional
	@Query(value = "insert into yeu_thich(ma_kh, ma_sp) values(?, ?)", nativeQuery = true)
	void addProductToFavourite(long id, long pid);

	@Modifying
	@Transactional
	@Query(value = "insert into gio_hang(ma_gh, ma_kh) values(?, ?)", nativeQuery = true)
	void createCart(long id, long pid);

	@Modifying
	@Transactional
	@Query(value = "delete from yeu_thich where ma_kh=? and ma_sp=?", nativeQuery = true)
	void deleteProductFromFavourite(long id, long pid);

	@Modifying
	@Transactional
	@Query(value = "insert into chi_tiet_gio_hang(ma_gh, ma_sp, so_luong) values(?, ?, ?)", nativeQuery = true)
	void addProductToCart(long id, long pid, int quantity);

	@Modifying
	@Transactional
	@Query(value = "delete from chi_tiet_gio_hang where ma_gh=? and ma_sp=?", nativeQuery = true)
	void deleteProductFromCart(long id, long pid);

	@Modifying
	@Transactional
	@Query(value = "update chi_tiet_gio_hang set so_luong=? where ma_gh=? and ma_sp=?", nativeQuery = true)
	void updateProductInCart(int quantity, long id, long pid);
}
