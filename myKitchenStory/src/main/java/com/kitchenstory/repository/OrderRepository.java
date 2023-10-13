package com.kitchenstory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kitchenstory.models.Order;

public interface OrderRepository extends JpaRepository <Order,Long>{

	@Query(value="SELECT id, createdate, modifydate, ordersummaryid, productid, userid, price FROM orders WHERE userid = ?", nativeQuery = true)
	List<Order> listOrdersByUerID(long id);
}
