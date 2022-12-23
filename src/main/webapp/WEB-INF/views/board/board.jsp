<%@ page import="com.example.RBM.domain.board.BoardDto" %>
<%@ page import="java.util.List" %>
<%@ page import="com.example.RBM.controller.BoardController" %><%--
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
    <title>Title</title>
</head>
<c:import url="/WEB-INF/views/user/header.jsp"/>
<link rel="stylesheet" href="css/table.css">
<body>
<section>
    <%
        if (session.getAttribute("user") == null)
            response.sendRedirect("/login");

    %>
    <div class="table-container">
        <table>
            <thead>
            <button class="submit_button" onclick="location.href='boardWrite'">글 작성</button>
            <tr>
                <th>no</th>
                <th>title</th>
                <th>user</th>
                <th>date</th>
                <th>viewCnt</th>
            </tr>
            </thead>
            <tbody class="container">
            </tbody>
        </table>
    </div>
</section>
<script src="/script/board.js"></script>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>
