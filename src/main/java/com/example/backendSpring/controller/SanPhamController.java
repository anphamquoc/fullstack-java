package com.example.backendSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.exception.ResourceNotFoundException;
import com.example.backendSpring.model.SanPham;
import com.example.backendSpring.repository.SanPhamRepository;

@RestController
@RequestMapping("/api/v1/san-pham")
public class SanPhamController {
	@Autowired
	private SanPhamRepository sanPhamRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public List<SanPham> getAllProducts() {
		return sanPhamRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/{id}")
	public String addNewProduct(@RequestBody SanPham sanPham, @PathVariable long id) {
		sanPhamRepository.addProduct(sanPham.getGia(), sanPham.getHinhAnh(), sanPham.getMoTa(), sanPham.getSao(),
				sanPham.getTenSp(), id);
		;
		return "Add thành công";
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{id}")
	public SanPham getProduct(@PathVariable long id) {
		SanPham sanPham = sanPhamRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy sản phẩm này"));
		return sanPham;
	}
}
