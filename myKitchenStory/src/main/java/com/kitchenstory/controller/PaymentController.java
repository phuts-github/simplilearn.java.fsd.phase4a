package com.kitchenstory.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenstory.models.Payment;
import com.kitchenstory.repository.PaymentRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class PaymentController {
	@Autowired
	private PaymentRepository paymentRepository;
	// get list of all
	@GetMapping("/payment")
	public List<Payment> getAllPayments(){
		System.out.println(" In contoller - getAllPayments");
		return paymentRepository.findAll();
	}	
	
	// add new
	@PostMapping("/payment")
	public Payment createPayment(@RequestBody Payment payment) {
		payment.setCreatedate(LocalDateTime.now().toString());
		return paymentRepository.save(payment);
	}
	
	// get one
	@GetMapping("/payment/{id}")
	public ResponseEntity<Payment> getPaymentById(@PathVariable long id) {
		Payment payment = paymentRepository.findById(id).orElse(new Payment());
		return ResponseEntity.ok(payment);
	}	
	
	// update one	
	@PutMapping("/payment/{id}")
	public ResponseEntity<Payment> updatePayment(@PathVariable long id, @RequestBody Payment paymentDetails){
		Payment payment = paymentRepository.findById(id).orElse(new Payment());

		//payment.setCreatedate(paymentDetails.getCreatedate());
		payment.setId(paymentDetails.getId());
		payment.setModifydate(LocalDateTime.now().toString());
		payment.setAmount(paymentDetails.getAmount());
		payment.setOrdersummaryid(paymentDetails.getOrdersummaryid());
		payment.setType(paymentDetails.getType());

		Payment updatedPayment = paymentRepository.save(payment);
		return ResponseEntity.ok(updatedPayment);
	}	

	// delete one
	@DeleteMapping("/payment/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePayment(@PathVariable long id){
		Payment payment = paymentRepository.findById(id).orElse(new Payment());
		paymentRepository.delete(payment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
