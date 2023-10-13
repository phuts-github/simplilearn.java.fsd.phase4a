package com.kitchenstory;

import java.time.LocalDateTime;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.kitchenstory.models.User;
import com.kitchenstory.repository.UserRepository;

@SpringBootApplication
public class KitchenstoryApplication {

	@Autowired
	UserRepository userRepository;

	@PostConstruct
	public void init() {
		String adminEmail = "admin@ks.com";
		User result = userRepository.findUserByEmail(adminEmail);
		
		if (result == null) {
			User user = new User();
			user.setCreatedate(LocalDateTime.now().toString());
			user.setEmail("admin@ks.com");
			user.setFname("admin");
			user.setLname("admin");
			user.setModifydate(null);
			user.setPass("admin123");
			user.setPhone(null);
			userRepository.save(user);
			System.out.println("Admin account created..");
		} else {
			System.out.println("Admin account already exist..");
		}
	}	
	
	public static void main(String[] args) {
		SpringApplication.run(KitchenstoryApplication.class, args);
	}

}
