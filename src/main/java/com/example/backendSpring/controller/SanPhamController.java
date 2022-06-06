package com.example.backendSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.exception.ResourceNotFoundException;
import com.example.backendSpring.model.SanPham;
import com.example.backendSpring.repository.SanPhamRepository;

@RestController
@RequestMapping("/api/v1/san-pham")
@CrossOrigin("*")
public class SanPhamController {
	@Autowired
	private SanPhamRepository sanPhamRepository;

	@GetMapping
	public List<SanPham> getAllProducts() {
		return sanPhamRepository.findAll();
	}

	@PostMapping("/{id}")
	public String addNewProduct(@RequestBody SanPham sanPham, @PathVariable long id) {
		sanPhamRepository.addProduct(sanPham.getGia(), !sanPham.getHinhAnh().contains("https") ? "assets/images/products/" + sanPham.getHinhAnh() : sanPham.getHinhAnh(),
				sanPham.getMoTa(), sanPham.getSao(),
				sanPham.getTenSp(), id, sanPham.getStatus());
		;
		return "Add thành công";
	}

	@GetMapping("/{id}")
	public SanPham getProduct(@PathVariable long id) {
		SanPham sanPham = sanPhamRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy sản phẩm này"));
		return sanPham;
	}

	@PutMapping("/{id}")
	public SanPham updateProduct(@RequestBody SanPham sanPham, @PathVariable long id) {
		SanPham sanPham2 = sanPhamRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy sản phẩm này"));
		sanPham2.setGia(sanPham.getGia());
		sanPham2.setTenSp(sanPham.getTenSp());
		sanPham2.setMoTa(sanPham.getMoTa());
		sanPham2.setStatus(sanPham.getStatus());
		sanPhamRepository.save(sanPham2);
		return sanPham2;
	}

	@DeleteMapping("/{id}")
	public String deleteProduct(@PathVariable long id) {
		SanPham sanPham = sanPhamRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy sản phẩm này"));
		sanPhamRepository.delete(sanPham);
		return "Xóa thành công";
	}

}
