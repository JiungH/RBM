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
<link rel="stylesheet" href="css/festival.css">
<c:import url="/WEB-INF/views/user/header.jsp"/>
<body>
<section>
    <%
        if (session.getAttribute("user") == null)
            response.sendRedirect("/login");

    %>
    <div class="searchrow">
		<span class="searchdate">
			<input type="date" id="date" name="date">
			<button class="submit_button" onclick="searchFestival()">search</button>
		</span>
    </div>
    <div class="container">
    </div>
    <div>
        <button class="backBtn" onclick="getDataBack()">back</button>
        <button class="nextBtn" onclick="getDataNext()">next</button>
    </div>


</section>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
<script src="/script/festival.js"></script>
</body>
</html>
