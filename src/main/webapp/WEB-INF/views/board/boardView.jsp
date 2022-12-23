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
<link rel="stylesheet" href="css/form.css">

<c:import url="/WEB-INF/views/user/header.jsp"/>
<body>
<section>
    <%
        if (session.getAttribute("user") == null) {
            response.sendRedirect("/login");
        }
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("utf-8");
        String user = (String) session.getAttribute("user");
        if (request.getParameter("no") != null) {
            int no = Integer.parseInt(request.getParameter("no"));
            int viewCnt = Integer.parseInt(request.getParameter("viewCnt"));
    %>
    <form>
        <div>
            <input type="hidden" id="no" name="no" value="<%=no%>">
            <input type="hidden" id="user" name="user" value="<%=user%>">
            <input type="hidden" id="viewCnt" name="viewCnt" value="<%=viewCnt%>">
        </div>
    </form>
    <div class="form-container">
    </div>
    <%
        }
    %>
    <h2>댓글</h2>
    <div class="form-container2">
        <form>
            <input type="hidden" id="user2" name="user2" value="<%=session.getAttribute("user")%>">
            <textarea required name="content" id="content" rows="3" placeholder="댓글 작성" required></textarea>
        </form>
        <button id="btn-writeReview" class="btn btn-primary">작성</button>
    </div>

    <div class="form-container3">
        <form>
            <input type="hidden" id="no2" name="no2" value="">
            <textarea required name="content2" id="content2" rows="3" placeholder="댓글 수정" required></textarea>
        </form>
        <button id="btn-writeReview2" className="btn btn-primary">작성</button>
    </div>

    <div>
        <table class="reviewTable-container">
            <thead>
            <tr>
                <th>댓글번호</th>
                <th>작성자</th>
                <th>댓글</th>
                <th>작성</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody class="review-container">
            </tbody>
        </table>
    </div>

</section>
<script src="/script/boardView.js"></script>
<script src="/script/boardDelete.js"></script>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>