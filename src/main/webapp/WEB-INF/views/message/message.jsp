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
    <title>Title</title>
</head>
<link rel="stylesheet" href="css/table.css">

<c:import url="/WEB-INF/views/user/header.jsp"/>
<body>
<section>
    <%

        if (session.getAttribute("user") == null)
            response.sendRedirect("/login");
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("utf-8");
        String user = (String) session.getAttribute("user");
        if (request.getParameter("no") != null) {
            int no = Integer.parseInt(request.getParameter("no"));
    %>
    <form>
        <div>
            <input type="hidden" id="no" name="no" value="<%=no%>">
            <input type="hidden" id="user" name="user" value="<%=user%>">
        </div>
    </form>
    <div class="table-container">
        <table class = "message-box">
            <thead>
            <button class="button" onclick="location.href=`sendMessage?no=<%=no%>`">메세지 보내기</button>
            <tr>
                <th>title</th>
                <th>user</th>
                <th>location</th>
                <th>location2</th>
                <th>time</th>
                <th>date</th>
            </tr>
            </thead>
            <tbody class="container">
            </tbody>
        </table>
    </div>
    <%
        }
    %>
    <div class="table-container">
        <table class="message-box">
            <thead>
            <tr>
                <th>No</th>
                <th>send</th>
                <th>content</th>
                <th>time</th>
            </tr>
            </thead>
            <tbody class="container2">
            </tbody>
        </table>
    </div>
</section>
<script src="/script/message.js"></script>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>