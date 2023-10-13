<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Category</title>
</head>
<%@include file="include/header-menu-admin.html"%>
<%@include file="include/shop-name.html"%>
<body>
<form action="categoryAddUpdate" method="post">
<h2>Add / Update Category</h2>
<br>ID:<input type="number" name="id" value="0" required disabled/>
<br>CODE:<input type="text" name="code" placeholder="code" required/>
<br>NAME:<input type="text" name="name" placeholder="name" required/>
<br><br><input type="submit" name="submit">
</form>
</body>
</html>