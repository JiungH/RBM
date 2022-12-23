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
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>
<c:import url="/WEB-INF/views/user/header.jsp"/>
<link href="/css/custom.css" rel="stylesheet">
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
        <form name="joinForm" id="joinForm" method="post">
            <table id="container">
                <tr>
                    <td id="result" colspan="2"></td>
                </tr>
                <tr>
                    <th><label for="user2">아이디</label></th>
                    <td><input type="text" name="user2" id="user2" readonly></td>
                </tr>

                <tr>
                    <th><label for="userpw">비밀번호</label></th>
                    <td><input type="password" name="userpw" id="userpw" placeholder="새로운 비밀번호를 입력해주세요."
                               oninput="checkPw()">
                        <br><span class="pwCheck"></span></td>

                </tr>
                <tr>
                    <th><label for="userpw_re">비밀번호 확인</label></th>
                    <td><input type="password" name="userpw_re" id="userpw_re" placeholder="비밀번호 확인"
                               oninput="checkPW()">
                        <br><span class="pwRe"></span></td>
                </tr>
                <tr>
                    <th><label for="username">이름</label></th>
                    <td><input type="text" name="username" id="username"></td>
                </tr>
                <tr>
                    <th><label for="email">이메일</label></th>
                    <td><input type="text" name="email" id="email" placeholder="이메일을 입력해주세요." oninput="checkEmail()">
                        <br><span class="checkEmail"></span></td>
                </tr>

                <tr class="zipcode_area">
                    <th>우편번호</th>
                    <td>
                        <input readonly name="postnum" type="text" id="postnum" placeholder="우편번호"><input type="button" id="search-btn"
                                                                                                          onclick="DaumPostcode()"
                                                                                                          value="우편번호 찾기">
                    </td>
                </tr>
                <tr class="addr_area">
                    <th>주소</th>
                    <td><input readonly name="addr" type="text" id="addr" placeholder="주소"></td>
                </tr>
                <tr>
                    <th>상세주소</th>
                    <td><input name="detailaddress" type="text" id="detailaddress" placeholder="상세주소"></td>
                </tr>
                <tr>
                    <th><label for="userPhone">전화번호</label></th>
                    <td><input type="text" name="userPhone" id="userPhone" placeholder="전화번호입력" oninput="checkPhone()">
                        <br><span class="phoneCheck"></span></td>
                </tr>
                <tr>
                    <th colspan="2" id="submit_block">
                        <input type="submit" id="updateSubmit" value="수정 완료">
                    </th>
                </tr>
            </table>
        </form>
    </div>
</section>
<script src="/script/userUpdate.js"></script>
<footer>
    <c:import url="/WEB-INF/views/user/footer.jsp"/>
</footer>
</body>
</html>
