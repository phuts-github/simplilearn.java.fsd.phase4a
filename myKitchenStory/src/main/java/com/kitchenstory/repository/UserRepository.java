package com.kitchenstory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kitchenstory.models.User;

public interface UserRepository extends JpaRepository <User,Long>{
	@Query(value="SELECT createdate, email, fname, id, lname, modifydate, pass, phone FROM users WHERE email = :email ", nativeQuery = true)	
	User findUserByEmail(@Param("email") String email);
	
	@Query(value="SELECT createdate, email, fname, id, lname, modifydate, pass, phone FROM users WHERE email = :email and pass = :pass", nativeQuery = true)	
	User findUserByEmailAndPass(@Param("email") String email,@Param("pass") String pass);
}
