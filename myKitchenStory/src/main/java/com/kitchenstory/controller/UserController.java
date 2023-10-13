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

import com.kitchenstory.models.User;
import com.kitchenstory.repository.UserRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class UserController {
	private UserController() {} 
	
	@Autowired
	private UserRepository userRepository;

	// get list of all
	@GetMapping("/user")
	public List<User> getAllUsers(){
		System.out.println(" In contoller - getAllUsers");
		return userRepository.findAll();
	}	
	
	// add new
	@PostMapping("/user")
	public User createUser(@RequestBody User newUserDetails) {
		User userExist = new User();
		userExist = userRepository.findUserByEmail(newUserDetails.getEmail());
		if (userExist == null) {
			newUserDetails.setCreatedate(LocalDateTime.now().toString());
			return userRepository.save(newUserDetails);
		} else {
			userExist = null;
			return userExist;
		}
	}
	
	// get one
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserById(@PathVariable long id) {
		User user = userRepository.findById(id).orElse(new User());
		return ResponseEntity.ok(user);
	}	
	
	// update one	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User userDetails){
		User user = userRepository.findById(id).orElse(new User());
		user.setEmail(userDetails.getEmail());
		user.setFname(userDetails.getFname());
		user.setPass(userDetails.getPass());
		user.setLname(userDetails.getLname());
		user.setPhone(userDetails.getPhone());
		//user.setCreatedate(userDetails.getCreatedate());
		user.setModifydate(LocalDateTime.now().toString());
		
		User updatedUser = userRepository.save(user);
		
		return ResponseEntity.ok(updatedUser);
	}	

	// delete one
	@DeleteMapping("/user/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable long id){
		User user = userRepository.findById(id).orElse(new User());
		
		//.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}	
}
