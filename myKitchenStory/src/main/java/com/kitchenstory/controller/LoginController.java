package com.kitchenstory.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kitchenstory.models.Login;
import com.kitchenstory.models.User;
import com.kitchenstory.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200", exposedHeaders="Access-Control-Allow-Origin" )
@RestController
@RequestMapping("/api/v1")
public class LoginController {
	
	private LoginController() {} 
	
	@Autowired
	private UserRepository userRepository;
	
	// validate login
	
	@PostMapping("/userlogin")
	public ResponseEntity<Login> loginByEmailAndPass(@RequestBody Login loginDetails) {
		System.out.println(" In contoller - getUserByEmailAndPass");
		Login loginResponse = new Login();
		
		System.out.println("incoming loginDetails " + loginDetails.toString());
		if (loginDetails.getEmail() == null || loginDetails.getEmail() == "") {
			loginResponse = null;
		} else if (loginDetails.getPass() == null || loginDetails.getPass() == "") {
			loginResponse = null;
		} else {
			
			User user = new User();
			user = userRepository.findUserByEmailAndPass(loginDetails.getEmail(), loginDetails.getPass()); 

			if (user != null) {
				if (loginDetails.getPhone() != null &&
					loginDetails.getPhone() != "" ) {
					//note - phone is being used to hold new password from input screen. 
					user.setPass(loginDetails.getPhone());
					user.setModifydate(LocalDateTime.now().toString());
					userRepository.saveAndFlush(user);
				}
				loginResponse.setEmail(user.getEmail());
				loginResponse.setFname(user.getFname());
				loginResponse.setId(user.getId());
				loginResponse.setLname(user.getLname());
			}

		}
		return ResponseEntity.ok(loginResponse);
	}		
	
}
