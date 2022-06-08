package com.example.backendSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.exception.ResourceNotFoundException;
import com.example.backendSpring.model.DonDatHang;
import com.example.backendSpring.repository.DonDatHangRepository;

@RestController
@RequestMapping("/api/v1/don-dat-hang")
@CrossOrigin("*")
public class DonDatHangController {

	@Autowired
	private DonDatHangRepository donDatHangRepository;

	@GetMapping
	public List<DonDatHang> getAllOrders() {
		return donDatHangRepository.findAll();
	}

	@PostMapping
	public DonDatHang createOrder(@RequestBody DonDatHang donDatHang) {

		return donDatHangRepository.save(donDatHang);
	}

	@GetMapping("/{id}")
	public DonDatHang getOrder(@PathVariable long id) {
		DonDatHang donDatHang = donDatHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy đơn đặt hàng này"));
		return donDatHang;
	}

	@PutMapping("/{id}")
	public DonDatHang updateOrder(@RequestBody DonDatHang donDatHang, @PathVariable long id) {
		DonDatHang donDatHang2 = donDatHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy đơn đặt hàng này"));
		donDatHang2.setTrangThai(donDatHang.getTrangThai());
		donDatHangRepository.save(donDatHang2);
		return donDatHang2;
	}

}
