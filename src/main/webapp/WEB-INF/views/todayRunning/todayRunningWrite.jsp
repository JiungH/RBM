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
<body>
<section>
    <%
        if (session.getAttribute("user") == null)
            response.sendRedirect("/login");
    %>
    <div class="form-container">
        <form>
            <input type="hidden" id="user" name="user" value="<%=session.getAttribute("user")%>">
            <input type="text" id="title" name="title" placeholder="글의 제목을 입력하세요.">
            <input type="time" id="meet" name="meet">
            <input type="text" id="location" name="location" placeholder="주소를 입력해주세요." readonly>
            <input type="text" id="location2" name="location2" placeholder="구체적인 장소를 입력해주세요.">
        </form>
        <button id="btn-write" class="btn btn-primary">작성</button>
        <button class="button" onclick="location.href='todayRunning'">취소</button>
    </div>
    <script src="/script/todayRunningWrite.js"></script>
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</section>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>
