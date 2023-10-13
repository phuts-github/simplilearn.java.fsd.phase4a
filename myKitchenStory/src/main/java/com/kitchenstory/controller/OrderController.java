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

import com.kitchenstory.models.Order;
import com.kitchenstory.repository.OrderRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class OrderController {
	@Autowired
	private OrderRepository orderRepository;
	// get list of all
	@GetMapping("/order")
	public List<Order> getAllOrders(){
		return orderRepository.findAll();
	}	
	
	// add new
	@PostMapping("/order")
	public Order createOrder(@RequestBody Order order) {
		order.setCreatedate(LocalDateTime.now().toString());
		return orderRepository.save(order);
	}
	
	// get one
	@GetMapping("/order/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable long id) {
		Order order = orderRepository.findById(id).orElse(new Order());
		return ResponseEntity.ok(order);
	}
	
	// get one by userID
	@GetMapping("/order/user/{id}")
	public List<Order> getOrderByUserId(@PathVariable long id) {
		return orderRepository.listOrdersByUerID(id);
	}	

	// update one	
	@PutMapping("/order/{id}")
	public ResponseEntity<Order> updateOrder(@PathVariable long id, @RequestBody Order orderDetails){
		Order order = orderRepository.findById(id).orElse(new Order());

		//order.setCreatedate(orderDetails.getCreatedate());
		order.setId(orderDetails.getId());
		order.setModifydate(orderDetails.getModifydate());
		order.setModifydate(LocalDateTime.now().toString());
		order.setOrdersummaryid(orderDetails.getOrdersummaryid());
		order.setProductid(orderDetails.getProductid());
		order.setUserid(orderDetails.getUserid());

		Order updatedOrder = orderRepository.save(order);
		return ResponseEntity.ok(updatedOrder);
	}	

	// delete one
	@DeleteMapping("/order/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable long id){
		Order order = orderRepository.findById(id).orElse(new Order());
		
		//.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
		
		orderRepository.delete(order);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
