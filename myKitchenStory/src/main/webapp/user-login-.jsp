<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User</title>
</head>
<%@include file="WEB-INF/jsp/include/shop-name.html"%>
<body>
<form action="loginUser" method="post">
<h2>User Login</h2>
<br>EMAIL:<input type="email" name="email" placeholder="email" required/>
<br>PASS:<input type="password" name="pass" placeholder="password" required/>
<br><br><input type="submit" name="submit">
</form>
</body>
</html>