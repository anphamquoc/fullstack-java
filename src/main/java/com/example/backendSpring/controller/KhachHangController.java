package com.example.backendSpring.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendSpring.dto.KhachHangRequest;
import com.example.backendSpring.exception.ResourceNotFoundException;
import com.example.backendSpring.model.ChiTietGioHang;
import com.example.backendSpring.model.GioHang;
import com.example.backendSpring.model.KhachHang;
import com.example.backendSpring.model.SanPham;
import com.example.backendSpring.repository.KhachHangRepository;

@RestController
@RequestMapping("/api/v1/khach-hang")
public class KhachHangController {

	@Autowired
	private KhachHangRepository khachHangRepository;

	// Get all customers
	@GetMapping
	public List<KhachHang> getAllCustomers() {
		return khachHangRepository.findAll();
	}

	// Get customer with id
	@GetMapping("/{id}")
	public ResponseEntity<KhachHang> getCustomerById(@PathVariable long id) {
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không có khách hàng cần tìm"));
		return ResponseEntity.ok(khachHang);
	}

	@PostMapping("/register")
	public KhachHang register(@RequestBody KhachHang khachHang) {
		KhachHang checKhachHang = khachHangRepository.findByUsername(khachHang.getUsername());
		if (checKhachHang != null) {
			throw new Error("Người dùng này đã tồn tại");
		}
		return khachHangRepository.save(khachHang);
	}

	@PostMapping("/login")
	public KhachHang login(@RequestBody KhachHangRequest thongTin) {
		KhachHang checkKhachHang = khachHangRepository.findByUsername(thongTin.getUsername());
		if (checkKhachHang == null) {
			throw new Error("Không tìm thấy người dùng");
		}
		if (!checkKhachHang.getPassword().equals(thongTin.getPassword())) {
			throw new Error("Sai mật khẩu");
		}

		return checkKhachHang;
	}

	@GetMapping("/{id}/yeu-thich")
	public Set<SanPham> getAllFavouriteProduct(@PathVariable long id) {
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy người dùng này"));
		return khachHang.getSanPhamYeuThich();
	}

	@PutMapping("/{id}/yeu-thich/{pid}")
	public String addProductToFavourite(@PathVariable long id, @PathVariable long pid) {
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy người dùng này"));
		for (SanPham sp : khachHang.getSanPhamYeuThich()) {
			if (sp.getMaSp() == pid) {
				throw new Error("Sản phẩm này đã có trong giỏ");
			}
		}
		khachHangRepository.addProductToFavourite(id, pid);

		return "Thêm thành công";

	}

	@DeleteMapping("/{id}/yeu-thich/{pid}")
	public String deleteProductFromFavourite(@PathVariable long id, @PathVariable long pid) {
		boolean checked = false;
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy người dùng này"));
		for (SanPham sp : khachHang.getSanPhamYeuThich()) {
			if (sp.getMaSp() == pid) {
				checked = true;
				break;
			}
		}

		if (!checked) {
			throw new Error("Sản phẩm không có trong danh mục yêu thích của bạn");
		}

		khachHangRepository.deleteProductFromFavourite(id, pid);
		return "Xóa khỏi danh mục yêu thích thành công";

	}

	@GetMapping("/{id}/gio-hang")
	public GioHang getAllCart(@PathVariable long id) {
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy người dùng này"));
		return khachHang.getGioHang();
	}

	@PutMapping("/{id}/gio-hang/{pid}")
	public String addProductToCart(@PathVariable long id, @PathVariable long pid) {
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy người dùng này"));
		GioHang gh = khachHang.getGioHang();
		for (ChiTietGioHang sp : gh.getChiTietGioHang()) {
			if (sp.getSanPham().getMaSp() == pid) {
				throw new Error("Sản phẩm này đã có trong giỏ");
			}
		}
		khachHangRepository.addProductToCart(id, pid, 1);

		return "Thêm thành công";

	}

	@DeleteMapping("/{id}/gio-hang/{pid}")
	public String deleteProductFromCart(@PathVariable long id, @PathVariable long pid) {
		boolean checked = false;
		KhachHang khachHang = khachHangRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Không tìm thấy người dùng này"));
		GioHang gh = khachHang.getGioHang();
		for (ChiTietGioHang sp : gh.getChiTietGioHang()) {
			if (sp.getSanPham().getMaSp() == pid) {
				checked = true;
				break;
			}
		}

		if (!checked) {
			throw new Error("Sản phẩm không có trong giỏ hàng của bạn");
		}

		khachHangRepository.deleteProductFromCart(id, pid);
		return "Xóa khỏi giỏ hàng thành công";

	}

}
