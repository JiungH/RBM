let start = {
    init: function () {
        $("#btn-logout").on("click", () => {
            this.logout();
        });
    },
    logout: function () {
        $.ajax({
            type: "POST",
            url: `/search/userLogout`
        }).done(function (result) {
            location.href = "/";
        }).fail(function (error) {
            alert("로그아웃 실패");
            location.href = "/";
        })
    }
}
start.init();