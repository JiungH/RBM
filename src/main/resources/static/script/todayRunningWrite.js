window.onload = function () {
    document.getElementById("location").addEventListener("click", function () {
        new daum.Postcode({
            oncomplete: function (data) {
                document.getElementById("location").value = data.address;
                document.querySelector("input[name=location2]").focus();
            }
        }).open();
    });
}

let index = {
    init: function () {
        $("#btn-write").on("click", () => {
            this.todayRunningWrite();
        });
    },
    todayRunningWrite: function () {
        let data = {
            title: $("#title").val(),
            user: $("#user").val(),
            location: $("#location").val(),
            location2: $("#location2").val(),
            meet: $("#meet").val(),
        };
        $.ajax({
            type: "POST",
            url: `/writeTodayRunning`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("글 작성 완료");
            location.href = "/todayRunning";
        }).fail(function (error) {
            console.log(error);
            alert("글 작성 실패")
        })
    }
}
index.init();