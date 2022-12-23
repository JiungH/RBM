let title = "";
let no = $("#no").val();
let user = $("#user").val();
;
let recv = "";

function getRecv() {
    $.ajax({
        method: "get",
        url: `getRunning?no=${no}`
    }).done(function (response) {
        recv += response.user;
        title += response.title;
    })
}

document.onload = getRecv();

let index = {
    init: function () {
        $("#btn-write").on("click", () => {
            this.sendMessage();
        })
    },
    sendMessage: function () {
        let data = {
            room: no,
            send: user,
            recv: recv,
            title: title,
            content: $("#content").val()
        };

        $.ajax({
            type: "POST",
            url: `/writeMessage`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            location.href = `/message?no=${no}`
        }).fail(function (error) {
            console.log(error);
        })
    }
}
index.init();