package com.kitchenstory.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenstory.models.Basket;
import com.kitchenstory.models.Order;
import com.kitchenstory.models.OrderSummary;
import com.kitchenstory.models.Product;
import com.kitchenstory.repository.OrderRepository;
import com.kitchenstory.repository.OrderSummaryRepository;
import com.kitchenstory.repository.ProductRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class ShopMenuController {
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private OrderRepository orderRepository;

	@Autowired
	private OrderSummaryRepository orderSummaryRepository;
	
	// get list of all
	@GetMapping("/shopmenu")
	public List<Product> getAllShopmenus(){
		List<Product> product = productRepository.findAll();
		return product;
	}	
	
	// get filtered list
	@GetMapping("/shopmenu/{p1}/{p2}")
	public List<Product> getFilteredShopmenus(@PathVariable String p1, @PathVariable String p2){
		List<Product> product; 
		if (!p1.isEmpty() && !p2.isEmpty()) {
			if (p2.equals("m")) {
				product = productRepository.listNameFilteredProducts(p1);
			} else {
				product = productRepository.listDescrFilteredProducts(p1);
			}
		} else {
			product = productRepository.findAll();	
		}
		
		return product;
	}
	
	// add new
	@PostMapping("/shopmenu")
	public ResponseEntity<Basket> placeBasketOrder(@RequestBody Basket[] basketList) {

		// Create summary ID and use it during order placement.
		OrderSummary orderSummary = new OrderSummary();
		orderSummary.setId(0);
		orderSummary.setUserid(basketList[0].getUserid());
		orderSummary.setAmount(0);
		orderSummary.setCreatedate(LocalDateTime.now().toString());
		orderSummary.setOrderitemsid(0);
		orderSummary.setModifydate(null);
		orderSummaryRepository.saveAndFlush(orderSummary);
		
		//Create order
		double totalOrderAmout = 0;
		Basket orderBasket;
		for (int i=0; i<basketList.length; i++ ) {
			Order order = new Order();
			order.setCreatedate(LocalDateTime.now().toString());
			order.setModifydate(null);
			order.setOrdersummaryid(orderSummary.getId());
			orderBasket = basketList[i];
			
			System.out.println("orderBasket.getUserId() " + orderBasket.getUserid());
			
			order.setUserid(orderBasket.getUserid());
			order.setPrice(orderBasket.getPrice());
			order.setProductid(orderBasket.getId());
			totalOrderAmout = totalOrderAmout + orderBasket.getPrice();
			orderRepository.saveAndFlush(order);
		}
		
		//Update order summary amount
		orderSummary.setAmount(totalOrderAmout);
		orderSummaryRepository.saveAndFlush(orderSummary);
		
		//return null;
		Basket basket = new Basket();
		basket.setId(orderSummary.getId());
		return ResponseEntity.ok(basket);
	}

	
}
