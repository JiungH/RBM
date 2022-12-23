let timeStamp = Date.now();
let date = new Date(timeStamp);
let now24Date = moment(date).format("YYYY-MM-DD HH:mm:ss");

let index = {
    init: function () {
        $("#btn-update").on("click", () => {
            this.boardUpdate();
        });
    }, boardUpdate: function () {
        let data = {
            no: $("#no").val(),
            title: $("#title").val(),
            content: $("#content").val(),
            user: $("#user").val(),
            modDate: now24Date
        };
        $.ajax({
            type: "POST",
            url: `/update/board`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("글수정 완료");
            location.href = "/board";
        }).fail(function (error) {
            console.log(error);
            alert("글수정 실패")
        })
    }
}
index.init();

