package com.example.backendSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.model.DonDatHang;
import com.example.backendSpring.repository.DonDatHangRepository;

@RestController
@RequestMapping("/api/v1/don-dat-hang")
public class DonDatHangController {

	@Autowired
	private DonDatHangRepository donDatHangRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public List<DonDatHang> getAllOrders() {
		return donDatHangRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public DonDatHang createOrder(@RequestBody DonDatHang donDatHang) {
		return donDatHangRepository.save(donDatHang);
	}

}
