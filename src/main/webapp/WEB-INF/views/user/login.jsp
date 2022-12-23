<%@ page import="com.example.RBM.domain.user.UserDto" %><%--
  Created by IntelliJ IDEA.
  User: hongjiung
  Date: 11/17/22
  Time: 3:45 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  <link href="/css/customTwo.css" rel="stylesheet">
</head>
<c:import url="header.jsp"/>
<body>
<section>
<div class="container">
  <h2>Let's hit it!!</h2>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" id="user" placeholder="Enter User ID" name="user">
    </div>

    <div class="form-group">
      <input type="password" class="form-control" id="password" placeholder="Enter Password" name="password">
    </div>

  </form>
  <button id="btn-login" class="btn btn-primary">로그인</button>
</div>
</section>
<script src="/script/login.js"></script>
<c:import url="footer.jsp"/>

</body>
</html>
