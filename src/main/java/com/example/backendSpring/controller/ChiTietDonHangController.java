package com.example.backendSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.exception.ResourceNotFoundException;
import com.example.backendSpring.model.ChiTietDonHang;
import com.example.backendSpring.repository.ChiTietDonHangRepository;

@RestController
@RequestMapping("/api/v1/chi-tiet-don-hang")
public class ChiTietDonHangController {

	@Autowired
	private ChiTietDonHangRepository chiTietDonHangRepository;

	@GetMapping
	public List<ChiTietDonHang> getAllDetailOrders() {
		return chiTietDonHangRepository.findAll();
	}

	@PostMapping("/{pid}")
	public String createDetailOrder(@PathVariable long pid, @RequestBody ChiTietDonHang chiTietDonHang) {
		chiTietDonHangRepository.createDetailOrder(chiTietDonHang.getMaDDH(), chiTietDonHang.getSoLuong(), pid);
		return "Add thành công";
	}

	@PutMapping("/{id}/{quantity}")
	public String changeQuantityProduct(@PathVariable long id, @PathVariable int quantity) {
		ChiTietDonHang chiTietDonHang = chiTietDonHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy chi tiết đơn hàng này để thay đổi"));
		int soLuong = (int) chiTietDonHang.getSoLuong();
		chiTietDonHang.setSoLuong(soLuong + quantity > 0 ? soLuong + quantity : 1);

		chiTietDonHangRepository.save(chiTietDonHang);

		return "Thay đổi số lượng thành công";
	}

	@DeleteMapping("/{id}")
	public String deleteOrder(@PathVariable long id) {
		ChiTietDonHang chiTiet = chiTietDonHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy chi tiết đơn hàng này"));
		chiTietDonHangRepository.deleteById(id);
		return "Xóa thành công";
	}
}
