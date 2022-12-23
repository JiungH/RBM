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

        String user = (String) session.getAttribute("user");
    %>
    <form>
        <input type="hidden" id="user" name="user" value="<%=user%>">
    </form>
    <ul>
        <li><a href="/userUpdate">회원 정보수정</a></li>
        <li><a href="/userLeave">회원탈퇴</a></li>
        <li><a href="/userWrite">작성글 모음</a></li>
        <li><a href="/userMessage">받은 메세지</a></li>
    </ul>
    <div class="container">
        <form method="POST">
            <table id="check_table">
                <tr>
                    <td>
                        <input type="text" class="form-control" id="userId" placeholder="Enter User Id" name="userId">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" class="form-control" id="password" placeholder="Enter Password"
                               name="password">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" id="checkSubmit" value="회원확인">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</section>
<script src="/script/userLeave.js"></script>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>
