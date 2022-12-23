<%--
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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/grid.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body onload="advice()">
<header>
    <%
        String user = (String) session.getAttribute("user");
        if (user == null) {
    %>

    <ul class="login_block">
        <li class="log"><a href="login">로그인</a></li>
        <li class="join"><a href="join2">회원가입</a></li>
    </ul>
    <%
    } else {
    %>
    <ul class="login_block">
        <li class="log"><%=user%>님 안녕하세요.</li>
        <li class="join">
            <button id="btn-logout" class="btn btn-primary">로그아웃</button>
        </li>
    </ul>
    <%
        }
    %>
    <h1><a href="/">Running Beyond MySelf</a></h1>
</header>
<nav>
    <ul>
        <li><a href="todayRunning">오늘의 조인</a></li>
        <li><a href="board">질문 게시판</a></li>
        <li><a href="festival">마라톤 정보</a></li>
        <li><a href="checkPwAll">마이페이지</a></li>
    </ul>
</nav>
<aside style="width: 100%">
    <div class="advice">
    </div>
</aside>

<script src="/script/advice.js"></script>
<script src="/script/logout.js"></script>
</body>
</html>
