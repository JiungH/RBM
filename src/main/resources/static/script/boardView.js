let no2 = $("#no").val();
let loginUser2 = $("#user").val();
let viewCnt2 = Number($("#viewCnt").val()) + 1;
let tempUser = "";

function boardView() {
    $('.form-container3').hide();
    let no = $("#no").val();
    let loginUser = $("#user").val();
    let viewCnt = Number($("#viewCnt").val()) + 1;

    $.ajax({
        method: "get", url: `/search/boardView?no=${no}`,
    }).done(function (response) {
        console.log(response)
        const user = response.user;
        const title = response.title;
        const content = response.content;
        tempUser += response.user;
        console.log(tempUser);
        console.log(123);
        let htmlText = "";
        if (user === loginUser) {
            htmlText += `
                    <div >
                    <button onclick=" if(confirm('수정하시겠습니까?'))"><a href="boardUpdate?no=${no}&title=${title}&content=${content}&user=${user}">글 수정</a></button>
                    <button id = "delete" name = "delete" onclick="if(confirm('삭제하시겠습니까?'))boardDelete()"><a href="board">글 삭제</a></button>
                    </div>
                    `;
        }
        $(".form-container").append(htmlText);
        $(".form-container").append(`
                <form>
                <input type="button" onclick="location.href='board'" value="글 목록">
                <input type="text" value=" 작성자 : ${user}" readonly>
                <input type="text" value="${title}" readonly>
                <textarea rows="10" readonly>${content}</textarea>
                </form>
                `);

    }).fail(function (error) {
        console.log(error)
    })

    let data = {
        no: $("#no").val(), // viewCnt:$("#viewCnt").val()+1
        viewCnt: viewCnt
    }

    $.ajax({
        method: "POST",
        url: `/update/viewCnt`,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        data_type: "json"
    }).done(function (result) {
    }).fail(function (error) {
        console.log(error)
        alert("오류")
    })

    let cnt = 0;
    $.ajax({
        method: "get", url: `/ReviewList?boardno=${no}`,
    }).done(function (response) {
        let list = response;
        if (list.length === 0) {
            $('.review-container').append(`
                    <p>댓글이 없습니다.</p>
                    `)
        } else {
            let htmlText = "";
            list.forEach(e => {
                cnt++;
                htmlText += `<tr>
                        <td>${cnt}</td>
                        <td>${e.user}</td>
                        <td>${e.content}</td>
                    `;
                if (e.modDate != null) {
                    htmlText += `<td>(수정일)</td>
                                   <td>${e.modDate}</td>
                    `;
                } else {
                    htmlText += `<td>(작성일)</td>
                                   <td>${e.regDate}</td>
                    `;
                }
                if (e.user === loginUser) {
                    htmlText += `
                       <td>
                       <button onclick="if(confirm('수정하시겠습니까?'))updateReview(${e.no},'${e.content}')">수정</button>
                       <button onclick="if(confirm('삭제하시겠습니까?'))deleteReview(${e.no})">삭제</button>
                       </td>
                        `
                }
            })
            $('.review-container').append(htmlText);
        }
    }).fail(function (error) {
        console.log(error);
    })
}

document.onload = boardView();

let index = {
    init: function () {
        $("#btn-writeReview").on("click", () => {
            this.reviewWrite();
        });
    },

    reviewWrite: function () {
        let data = {
            boardno: no2, writer: tempUser, user: $("#user2").val(), content: $("#content").val()
        };
        $.ajax({
            type: "POST",
            url: `/writeReview`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("글작성 완료");
            location.href = `/boardView?no=${no2}&viewCnt=${viewCnt2}`;
        }).fail(function (error) {
            console.log(error);
            alert("글작성 실패")
        })
    }
}
index.init();

let index2 = {
    init: function () {
        $("#btn-writeReview2").on("click", () => {
            this.reviewUpdate();
        });
    }, reviewUpdate: function () {
        let data = {
            no: $("#no2").val(), content: $("#content2").val()
        };
        $.ajax({
            type: "POST",
            url: `/updateReview`,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            data_type: "json"
        }).done(function (result) {
            console.log(result);
            alert("글작성 완료");
            location.href = `/boardView?no=${no2}&viewCnt=${viewCnt2}`;
        }).fail(function (error) {
            console.log(error);
            alert("글작성 실패")
        })
    }
}
index2.init();


function deleteReview(no) {
    $.ajax({
        method: "Delete", url: `/deleteReview?no=${no}`
    }).done(function (response) {
        console.log(response);
        location.href = `/boardView?no=${no2}&viewCnt=${viewCnt2}`;
    })
}

function updateReview(no, content) {
    $('.form-container2').hide();
    $(".form-container3").show();
    $(".form-container3 input[name=no2]").val(no);
    $(".form-container3 textarea").val(content);
}