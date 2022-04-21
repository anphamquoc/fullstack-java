package com.example.backendSpring.repository;

import com.example.backendSpring.model.Review;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}