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

        String user = (String) session.getAttribute("user");
        int no = Integer.parseInt(request.getParameter("no"));
    %>
    <div class="form-container">
        <form>
            <input type="hidden" id="no" name="no" value="<%=no%>">
            <input type="hidden" id="user" name="user" value="<%=user%>">
            <textarea name="content" id="content" rows="3" placeholder="메세지 내용" required></textarea>
        </form>
        <button id="btn-write" class="btn btn-primary">작성</button>
        <button class="button" onclick="location.href='message?no=<%=no%>'">취소</button>
    </div>
    <script src="/script/sendMessage.js"></script>
</section>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>
