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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <link href="/css/custom.css" rel="stylesheet">
</head>
<c:import url="header.jsp"/>
<body>
<section>
    <div class="container">
        <h2>Let's with us!!</h2>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="user" placeholder="Enter user ID" name="user" required>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Enter Password" name="password"
                       required>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="nickname" placeholder="Enter user NickName" name="nickname"
                       required>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Enter user Name" name="name" required>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="phone" placeholder="Enter user PhoneNumber 010-xxxx-xxxx"
                       name="phone" required>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="email" placeholder="Enter user E-mail Address" name="email"
                       required>
            </div>

            <div class="form-group">
                <input type="text" class="form-control" id="address" placeholder="Enter user Address" name="address"
                       required>
            </div>

            <div class="form-group form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember" required> I agree on the format your
                    company suggested.
                    <div class="invalid-feedback">Check this checkbox to continue.</div>
                </label>
            </div>
        </form>
        <button id="btn-save" class="btn btn-primary">회원가입 완료</button>
    </div>
    <script src="/script/join.js"></script>
</section>
<c:import url="footer.jsp"/>
</body>
</html>
