function boardDelete() {
    let number = $("#no").val();
    $.ajax({
        method: "DELETE", url: `/leave/board?no=${number}`
    }).done(function (response) {
        console.log(response);
        alert("삭제 성공");
        location.href = "/board";
    }).fail(function (fail) {
        console.log(fail);
        alert("삭제 실패");
        location.href = "/board";
    })
}