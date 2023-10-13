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

import com.kitchenstory.models.OrderSummary;
import com.kitchenstory.repository.OrderSummaryRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class OrderSummaryController {
	@Autowired
	private OrderSummaryRepository orderSummaryRepository;
	// get list of all
	@GetMapping("/ordersummary")
	public List<OrderSummary> getAllOrderSummarys(){
		return orderSummaryRepository.findAll();
	}	
	
	// add new
	@PostMapping("/ordersummary")
	public OrderSummary createOrderSummary(@RequestBody OrderSummary orderSummary) {
		orderSummary.setCreatedate(LocalDateTime.now().toString());
		return orderSummaryRepository.save(orderSummary);
	}
	
	// get one
	@GetMapping("/ordersummary/{id}")
	public ResponseEntity<OrderSummary> getOrderSummeryById(@PathVariable long id) {
		OrderSummary orderSummary = orderSummaryRepository.findById(id).orElse(new OrderSummary());
		return ResponseEntity.ok(orderSummary);
	}	
	
	// get list of order summary by user id
	@GetMapping("/ordersummary/user/{id}")
	public List<OrderSummary> getOrderSummeryByUserId(@PathVariable long id) {
		return orderSummaryRepository.listOrdersSummaryByUerID(id);
		
	}	
	
	// update one	
	@PutMapping("/ordersummary/{id}")
	public ResponseEntity<OrderSummary> updateOrderSummary(@PathVariable long id, @RequestBody OrderSummary orderSummaryDetails){
		OrderSummary orderSummary = orderSummaryRepository.findById(id).orElse(new OrderSummary());

		//orderSummary.setCreatedate(orderSummaryDetails.getCreatedate());
		orderSummary.setId(orderSummaryDetails.getId());
		orderSummary.setModifydate(orderSummaryDetails.getModifydate());
		orderSummary.setModifydate(LocalDateTime.now().toString());
//		orderSummary.setOrderSummarysummaryid(orderSummaryDetails.getOrderSummarysummaryid());
//		orderSummary.setProductid(orderSummaryDetails.getProductid());
		orderSummary.setUserid(orderSummaryDetails.getUserid());

		OrderSummary updatedOrderSummary = orderSummaryRepository.save(orderSummary);
		return ResponseEntity.ok(updatedOrderSummary);
	}	

	// delete one
	@DeleteMapping("/ordersummary/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrderSummary(@PathVariable long id){
		OrderSummary orderSummary = orderSummaryRepository.findById(id).orElse(new OrderSummary());
		
		orderSummaryRepository.delete(orderSummary);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
