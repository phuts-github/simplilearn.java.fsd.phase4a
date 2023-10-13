<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User</title>
</head>
<%@include file="include/shop-name.html"%>
<body>
<form action="loginAdmin" method="post">
<h2>User Login</h2>
<br>EMAIL:<input type="email" name="email" placeholder="email" required/>
<br>PASS:<input type="password" name="pass" placeholder="password" required/>
<br>ADMIN:<input type="text" name="admin" placeholder="admin code" required/>
<br>ADMINPASS:<input type="password" name="adminpass" placeholder="admin password" required/>
<br><br><input type="submit" name="submit">
</form>
</body>
</html>