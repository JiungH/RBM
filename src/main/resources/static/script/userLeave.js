let loginUser = $("#user").val();
let no = "";
let checkId = "";
let checkPw = "";

function leave() {
    console.log(loginUser)
    $.ajax({
        method: "get",
        url: `/search/user?user=${loginUser}`
    }).done(function (response) {
        console.log(response);
        no += response.id;
        checkId += response.user;
        checkPw += response.password;
    }).fail(function (error) {
        console.log(error);
    });
}

document.onload = leave();


$("#checkSubmit").on("click", function (e) {
    let user = $("#userId").val();
    let password = $("#password").val();
    e.preventDefault();

    if (user === checkId && password === checkPw) {
        if (confirm("정말로 탈퇴하시겠습니까?")) {
            $.ajax({
                method: "delete",
                url: `/leave/user?id=${no}`
            }).done(function (result) {
                alert("정상적으로 회원이 탈퇴되었습니다.");
                $.ajax({
                    type: "POST",
                    url: `/search/userLogout`
                }).done(function (result) {
                    location.href = "/";
                }).fail(function (error) {
                    location.href = "/";
                })
            }).fail(function (error) {
                alert("회원탈퇴 실패")
            })
        } else {
            location.href = "/mypage"
        }
    } else {
        alert("회원님의 정보가 일치하지 않습니다.")
        location.href = "/checkPwAll";
    }
});