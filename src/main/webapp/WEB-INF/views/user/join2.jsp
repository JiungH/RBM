<%@ page import="com.example.RBM.domain.user.UserDto" %><%--
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
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <link href="/css/custom.css" rel="stylesheet">
</head>
<c:import url="header.jsp"/>
<body>
<section>
    <div class="container-Update">
        <form name="updateForm" id="updateForm" method="post">
            <table id="container">
                <tr>
                    <td id="result" colspan="2"></td>
                </tr>
                <tr>
                    <th><label for="user">아이디</label></th>
                    <td><input type="text" name="user" id="user" placeholder="아이디를 입력해주세요." oninput="checkId()">
                        <br><span class="idCheck" id="idCheck"></span></td>
                </tr>
                <tr>
                    <th><label for="userpw">비밀번호</label></th>
                    <td><input type="password" name="userpw" id="userpw" placeholder="8자리 이상 써주세요" oninput="checkPw()">
                        <br><span class="pwCheck"></span></td>

                </tr>
                <tr>
                    <th><label for="userpw_re">비밀번호 확인</label></th>
                    <td><input type="password" name="userpw_re" id="userpw_re" oninput="checkPW()">
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
                        <input type="submit" id="joinSubmit" value="가입 완료">
                    </th>
                </tr>
            </table>
        </form>
    </div>
    <%--  <form id="phoneNumber" action="/user/message">--%>
    <%--  </form>--%>
    <script src="/script/join.js"></script>
</section>
<c:import url="footer.jsp"/>
</body>
</html>
