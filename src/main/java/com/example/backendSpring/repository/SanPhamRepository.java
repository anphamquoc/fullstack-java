package com.example.backendSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

import com.example.backendSpring.model.SanPham;

public interface SanPhamRepository extends JpaRepository<SanPham, Long> {
    @Modifying
    @Transactional
    @Query(value = "insert into san_pham(gia, hinh_anh, mo_ta, sao, ten_sp, ma_pl, status, so_luong_ban) values(?1, ?2, ?3, ?4, ?5, ?6, ?7, 0)", nativeQuery = true)
    void addProduct(long gia, String hinhAnh, String moTa, double sao, String tenSp, long maPl, int status);
}
