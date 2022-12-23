let index = {
    init: function () {
        $("#btn-write").on("click", () => {
            this.boardWrite();
        });
    }, boardWrite: function () {
        let data = {
            title: $("#title").val(), content: $("#content").val(), user: $("#user").val()
        };
        $.ajax({
            type: "POST",
            url: `/search/writeBoard`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("글작성 완료");
            location.href = "/board";
        }).fail(function (error) {
            console.log(error);
            alert("글작성 실패")
        })
    }
}
index.init();