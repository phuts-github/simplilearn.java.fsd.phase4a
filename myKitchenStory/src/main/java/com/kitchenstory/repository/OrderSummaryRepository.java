package com.kitchenstory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kitchenstory.models.OrderSummary;

public interface OrderSummaryRepository extends JpaRepository <OrderSummary,Long>{
	@Query(value="SELECT id, amount, createdate, modifydate, orderitemsid, userid FROM ordersummary WHERE userid = ?", nativeQuery = true)
	List<OrderSummary> listOrdersSummaryByUerID(long id);

}
