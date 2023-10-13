package com.kitchenstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kitchenstory.models.Payment;

public interface PaymentRepository extends JpaRepository <Payment,Long>{

}
