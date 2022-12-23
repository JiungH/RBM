let loginUser = $("#user").val();

function userUpdate() {
    $.ajax({
        method: "GET",
        url: `/search/user?user=${loginUser}`
    }).done(function (response) {
        console.log(response);
        const user = response.user;
        const name = response.name;
        const phone = response.phone;
        const email = response.email;
        const password = response.password;
        const addressNumber = response.addressNumber;
        const address = response.address;
        const addressDetail = response.addressDetail;
        $('#user2').val(user);
        $('#username').val(name);
        $('#email').val(email);
        $('#userpw').val(password);
        $('#userpw_re').val(password);
        $('#detailaddress').val(addressDetail);
        $('#addr').val(address);
        $('#postnum').val(addressNumber);
        $('#userPhone').val(phone);
    });
}

document.onload = userUpdate();

function checkPw() {
    let userpw = $("#userpw").val();
    let checkNumber = userpw.search(/[0-9]/g);
    let checkEnglish = userpw.search(/[a-z]/ig);
    let pwCheck = $(".pwCheck");
    let userpwCheck = $("#userpw_re").val();
    if (userpw.length < 1) {
        pwCheck[0].textContent = "비밀번호를 입력해주세요";
    } else if (!/^(?=.*[a-zA-Z])(?=.*[~!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(userpw)) {
        pwCheck[0].textContent = "숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.";
    } else if (checkNumber < 0 || checkEnglish < 0) {
        pwCheck[0].textContent = "숫자와 영문자를 혼용하여야 합니다.";
    } else if (/(\w)\1\1\1/.test(userpw)) {
        pwCheck[0].textContent = "같은 문자를 4번 이상 사용하실 수 없습니다.";
    } else {
        pwCheck[0].textContent = "사용 가능한 비밀번호입니다.";
    }
}

function checkPW() {
    let userpwCheck = $("#userpw_re").val();
    let userpw = $("#userpw").val();
    let pwre = $(".pwRe");
    if (userpwCheck < 1) {
        pwre[0].textContent = "비밀번호 확인해주세요";
    } else if (userpwCheck != userpw) {
        pwre[0].textContent = "비밀번호가 틀립니다";
    } else {
        pwre[0].textContent = "비밀번호가 일치합니다.";
    }
}

function checkEmail() {
    let email = $("#email").val();
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    let checkEmail = $(".checkEmail");
    if (email.length < 1) {
        checkEmail[0].textContent = "이메일을 입력해주세요";
    } else if (!regEmail.test(email)) {
        checkEmail[0].textContent = "이메일 형식으로 입력해주세요.";
    } else {
        checkEmail[0].textContent = "이메일 형식이 일치합니다.";
    }
}

function checkPhone() {
    let userPhone = $("#userPhone").val();
    let checkNumber = userPhone.search(/[0-9]/g);
    let phoneCheck = $(".phoneCheck");
    if (userPhone.length < 1) {
        phoneCheck[0].textContent = "전화번호를 입력해주세요.";
    } else if (checkNumber < 0) {
        phoneCheck[0].textContent = "숫자만 입력가능합니다.";
    } else if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(userPhone)) {
        phoneCheck[0].textContent = "전화번호 형식에 맞게 입력해주세요.";
    } else {
        phoneCheck[0].textContent = "전화번호가 확인되었습니다.";
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


$("#updateSubmit").on("click", function (e) {
    let user2 = $("#user2").val();
    let userPhone = $("#userPhone").val();
    console.log(userPhone);
    let userpw = $("#userpw").val();
    let userpwCheck = $("#userpw_re").val();
    let email = $("#email").val();
    console.log(email);
    let username = $("#username").val();
    let addr = $("#addr").val();
    let postnum = $("#postnum").val();
    if (postnum === null) {
        postnum = addressNumber2;
    }
    let detailaddress = $("#detailaddress").val();
    if (detailaddress === null) {
        detailaddress = addressDetail2;
    }

    let checkNumber = userpw.search(/[0-9]/g);
    let checkEnglish = userpw.search(/[a-z]/ig);
    let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    e.preventDefault();
    if (userpw == "") {
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
        alert("이메일을 입력해주세요");
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
            user: user2,
            password: userpw,
            name: username,
            phone: userPhone,
            email: email,
            addressDetail: detailaddress,
            addressNumber: postnum,
            address: addr
        }
        $.ajax({
            type: "POST",
            url: "update/user",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("정상적으로 정보수정이 되셨습니다.");
            location.href = "/";
        }).fail(function (error) {
            console.log(error);
            alert("정보수정 실패");
        })
    }
})