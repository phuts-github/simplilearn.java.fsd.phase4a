package com.kitchenstory.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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

import com.kitchenstory.models.Product;
import com.kitchenstory.repository.ProductRepository;
import com.kitchenstory.utils.ValidationChecks;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;

	// get list of all
	@GetMapping("/product")
	public List<Product> getAllProducts(HttpServletRequest request){
		System.out.println(" In contoller - getAllProducts");
		HttpSession session = request.getSession();
		session.setAttribute("responseAction", "");
		return productRepository.findAll();
	}	
	
	// add new
	@PostMapping("/product")
	public Product createProduct(@RequestBody Product product) {
		System.out.println(" In contoller - createProduct");
		product.setCreatedate(LocalDateTime.now().toString());
		return productRepository.save(product);
	}
	
	// get one
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable long id,HttpServletRequest request) {
		System.out.println(" In contoller - getProductById");
		
		HttpSession session = request.getSession();
		System.out.println(" In contoller - request " + request.toString());
		
		Product product = new Product();
		if (!ValidationChecks.isUserLoggedIn(request)) {
			session.setAttribute("responseAction", "login");
			System.out.println("1 " +ResponseEntity.badRequest().build() );
			return ResponseEntity.ok(product);
		}else {
			product = productRepository.findById(id).orElse(new Product());
			session.setAttribute("responseAction", "");
			System.out.println("2 " +ResponseEntity.ok(product) );
//				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
			return ResponseEntity.ok(product);
		}
	}	
	
	// update one	
	@PutMapping("/product/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product productDetails){
		System.out.println(" In productContoller - updateProduct " + LocalDateTime.now().toString());
		Product product = productRepository.findById(id).orElse(new Product());
		product.setCode(productDetails.getCode());
//		product.setCreatedate(productDetails.getCreatedate());
		product.setDescr(productDetails.getDescr());
		product.setImagepath(productDetails.getImagepath());
//		product.setModifydate(productDetails.getModifydate());
		product.setModifydate(LocalDateTime.now().toString());
		product.setName(productDetails.getName());
		product.setPrice(productDetails.getPrice());
		product.setStatus(productDetails.getStatus());
		
		Product updatedProduct = productRepository.save(product);
		return ResponseEntity.ok(updatedProduct);
	}	

	// delete one
	@DeleteMapping("/product/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable long id){
		System.out.println(" In productContoller - delete product");
		Product product = productRepository.findById(id).orElse(new Product());
		
		//.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}	
}
