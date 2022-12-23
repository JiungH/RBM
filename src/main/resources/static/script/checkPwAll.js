let loginUser = $("#user").val();
let checkPw = "";
function mypage(){
    console.log(loginUser)
    $.ajax({
        method:"get",
        url:`/search/user?user=${loginUser}`
    }).done(function (response){
        console.log(response);
        checkPw += response.password;
    }).fail(function (error){
        console.log(error);
    });
}
document.onload = mypage();


$("#checkSubmit").on("click",function(e){
    let password = $("#password").val();
    console.log(loginUser);
    console.log(password);
    e.preventDefault();
    if(password === checkPw){
        sessionStorage.removeItem("user");
        location.href="/myPage";
    }else{
        alert("비밀번호가 일치하지 않습니다.")
        location.href="/checkPwAll";
    }
});