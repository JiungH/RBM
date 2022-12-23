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
<link rel="stylesheet" href="css/form.css">
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<body>
<section>
    <%
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        int no = Integer.parseInt(request.getParameter("no"));
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        String user = request.getParameter("user");
        if (session.getAttribute("user") == null)
            response.sendRedirect("/login");


    %>
    <div class="form-container">
        <form>
            <input type="hidden" id="no" name="no" value="<%=no%>">
            <input type="text" id="user" name="user" value="<%=user%>" readonly>
            <input type="text" id="title" name="title" required value="<%=title%>">
            <textarea id="content" name="content" rows="20" required><%=content%></textarea>
        </form>
        <button id="btn-update" class="btn btn-primary">작성</button>
        <button class="button" onclick="location.href='board'">취소</button>
    </div>

    <script src="/script/boardUpdate.js"></script>
</section>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>
