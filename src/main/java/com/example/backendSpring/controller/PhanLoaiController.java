package com.example.backendSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.model.PhanLoai;
import com.example.backendSpring.repository.PhanLoaiRepository;

@RestController
@RequestMapping("/api/v1/phan-loai")
public class PhanLoaiController {

	@Autowired
	private PhanLoaiRepository phanLoaiRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	public List<PhanLoai> getAllCategories() {
		return phanLoaiRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	public PhanLoai addNewCategory(@RequestBody PhanLoai phanLoai) {
		return phanLoaiRepository.save(phanLoai);
	}
}
