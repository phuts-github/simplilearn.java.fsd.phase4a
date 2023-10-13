package com.kitchenstory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kitchenstory.models.Product;

public interface ProductRepository extends JpaRepository <Product,Long>{
	
	@Query(value="SELECT id,code,createdate,descr,imagepath,modifydate,name,price,status FROM products WHERE name like %?%", nativeQuery = true)
	List<Product> listNameFilteredProducts(String strFilter);
	
	@Query(value="SELECT id,code,createdate,descr,imagepath,modifydate,name,price,status FROM products WHERE descr like %?%", nativeQuery = true)
	List<Product> listDescrFilteredProducts(String strFilter);
}
