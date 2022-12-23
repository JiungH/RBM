function checkId() {
    let user = $("#user").val();
    let idCheck = document.getElementsByClassName("idCheck");
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    $.ajax({
        url: `/search/userId?user=${user}`,
        type: 'get',
        dataType: 'JSON',
        success: function (cnt) {
            if (user.length < 4 && cnt != 1) {
                idCheck[0].textContent = "아이디는 4자리 이상 입력해주세요";
                $(".idCheck").css('color','red');
            } else if (cnt == 1) {
                idCheck[0].textContent = "중복된 아이디입니다.";
                $(".idCheck").css('color','red');
            } else {
                idCheck[0].textContent = "사용할 수 있는 아이디입니다.";
                $(".idCheck").css('color','skyblue');
            }
        },
        error: function () {
            console.log("처리실패")
        }
    });
}


function checkPw() {
    let userpw = $("#userpw").val();
    let checkNumber = userpw.search(/[0-9]/g);
    let checkEnglish = userpw.search(/[a-z]/ig);
    let pwCheck = $(".pwCheck");
    let userpwCheck = $("#userpw_re").val();
    if (userpw.length < 1) {
        pwCheck[0].textContent = "비밀번호를 입력해주세요";
        $(".pwCheck").css('color','red');
    } else if (!/^(?=.*[a-zA-Z])(?=.*[~!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(userpw)) {
        pwCheck[0].textContent = "숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.";
        $(".pwCheck").css('color','red');
    } else if (checkNumber < 0 || checkEnglish < 0) {
        pwCheck[0].textContent = "숫자와 영문자를 혼용하여야 합니다.";
        $(".pwCheck").css('color','red');
    } else if (/(\w)\1\1\1/.test(userpw)) {
        pwCheck[0].textContent = "같은 문자를 4번 이상 사용하실 수 없습니다.";
        $(".pwCheck").css('color','red');
    } else {
        pwCheck[0].textContent = "사용 가능한 비밀번호입니다.";
        $(".pwCheck").css('color','skyblue');
    }
}

//비밀번호 확인
function checkPW() {
    let userpwCheck = $("#userpw_re").val();
    let userpw = $("#userpw").val();
    let pwre = $(".pwRe");
    if (userpwCheck < 1) {
        pwre[0].textContent = "비밀번호 확인해주세요";
        $(".pwRe").css('color','red');
    } else if (userpwCheck != userpw) {
        pwre[0].textContent = "비밀번호가 틀립니다";
        $(".pwRe").css('color','red');
    } else {
        pwre[0].textContent = "비밀번호가 일치합니다.";
        $(".pwRe").css('color','skyblue');
    }
}

function checkEmail() {
    let email = $("#email").val();
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    let checkEmail = $(".checkEmail");
    if (email.length < 1) {
        checkEmail[0].textContent = "이메일을 입력해주세요";
        $(".checkEmail").css('color','red');
    } else if (!regEmail.test(email)) {
        checkEmail[0].textContent = "이메일 형식으로 입력해주세요.";
        $(".checkEmail").css('color','red');
    } else {
        checkEmail[0].textContent = "이메일 형식이 일치합니다.";
        $(".checkEmail").css('color','skyblue');
    }
}

function checkPhone() {
    let userPhone = $("#userPhone").val();
    let checkNumber = userPhone.search(/[0-9]/g);
    let phoneCheck = $(".phoneCheck");
    if (userPhone.length < 1) {
        phoneCheck[0].textContent = "전화번호를 입력해주세요.";
        $(".phoneCheck").css('color','red');
    } else if (checkNumber < 0) {
        phoneCheck[0].textContent = "숫자만 입력가능합니다.";
        $(".phoneCheck").css('color','red');
    } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(userPhone)) {
        phoneCheck[0].textContent = "전화번호 형식에 맞게 입력해주세요.";
        $(".phoneCheck").css('color','red');
    } else {
        phoneCheck[0].textContent = "전화번호가 확인되었습니다.";
        $(".phoneCheck").css('color','skyblue');
    }
}

let address = "";

function DaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            var addr = '';
            if (data.userSelectedType === 'R') {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }
            document.getElementById('postnum').value = data.zonecode;
            document.getElementById("addr").value = addr;
            address += addr;
            document.getElementById("detailaddress").focus();
        }
    }).open();
}


$("#joinSubmit").on("click", function (e) {
    const joinForm = $("#joinForm");
    let user = $("#user").val();
    let idCheck = document.getElementsByClassName("idCheck");
    let userPhone = $("#userPhone").val();
    let userpw = $("#userpw").val();
    let email = $("#email").val();
    let userpwCheck = $("#userpw_re").val();
    let username = $("#username").val();
    let postnum = $("#postnum").val();
    let detailaddress = $("#detailaddress").val();
    let checkNumber = userpw.search(/[0-9]/g);
    let checkEnglish = userpw.search(/[a-z]/ig);
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    e.preventDefault();
    if (user == "") {
        alert("아이디를 입력해주세요");
    } else if (idCheck[0].textContent == "중복된 아이디입니다.") {
        alert("중복된 아이디입니다.");
    } else if (userpw == "") {
        alert("비밀번호를 입력해주세요");
    } else if (!/^(?=.*[a-zA-Z])(?=.*[~!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(userpw)) {
        alert('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
        return false;
    } else if (checkNumber < 0 || checkEnglish < 0) {
        alert("숫자와 영문자를 혼용하여야 합니다.");
        return false;
    } else if (/(\w)\1\1\1/.test(userpw)) {
        alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
        return false;
    } else if (userpwCheck == "") {
        alert("비밀번호 확인을 해주세요");
    } else if (userpwCheck != userpw) {
        alert("비밀번호가 틀립니다. 비밀번호 확인을 다시 해주세요");
    } else if (username == "") {
        alert("이름을 입력해주세요");
    } else if (email == "") {
        alert("아이디를 입력해주세요");
    } else if (!regEmail.test(email)) {
        alert("이메일 형식으로 작성해주세요");
    } else if (postnum == "") {
        alert("우편번호를 입력해주세요");
    } else if (detailaddress == "") {
        alert("상세주소를 입력해주세요");
    } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(userPhone)) {
        alert("휴대폰 형식에 맞게 입력해주세요.")
    } else {
        let data = {
            user: user,
            password: userpw,
            name: username,
            phone: userPhone,
            email: email,
            address: address,
            addressDetail: detailaddress,
            addressNumber: postnum
        }
        $.ajax({
            type: "POST",
            url: `/search/userCreate`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("정상적으로 회원가입이 되셨습니다.");
            location.href = "/login";
        }).fail(function (error) {
            console.log(error);
            alert("회원가입 실패");
        })
    }
})