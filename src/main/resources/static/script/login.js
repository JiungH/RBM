let index = {
    init: function () {
        $("#btn-login").on("click", () => {
            const id = $("#user").val();
            const password = $("#password").val();
            this.login(id, password);
        });
    },
    login: function (id, password) {
        $.ajax({
            type: "POST",
            url: `/search/login?user=${id}&password=${password}`
        }).done(function (response) {
            if (response === true) {
                alert("로그인 완료.");
                location.href = "/";
            } else {
                alert("로그인 실패")
                location.href = "login";
            }
        });
    }
}
index.init();
