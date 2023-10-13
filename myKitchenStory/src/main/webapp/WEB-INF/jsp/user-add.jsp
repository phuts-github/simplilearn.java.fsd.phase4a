<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User</title>
</head>
<%@include file="include/header-menu.html"%>
<%@include file="include/shop-name.html"%>
<body>
<form action="userAddUpdate" method="post">
<h2>Add / Update User</h2>
<br>ID:<input type="number" name="id" value="0" required disabled/>
<br>EMAIL:<input type="email" name="email" placeholder="email" required/>
<br>NAME:<input type="text" name="name" placeholder="name" required/>
<br>PASS:<input type="password" name="pass" placeholder="password" required/>
<br>ADMIN:<input type="text" name="admin" placeholder="admin code" required/>
<br>ADMINPASS:<input type="password" name="adminpass" placeholder="admin password" required/>
<br>ADDRESS:<input type="number" name="address" placeholder="address" required/>
<br><br><input type="submit" name="submit">
</form>
</body>
</html>