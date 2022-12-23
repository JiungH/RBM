let loginUser = $("#user").val();
let cnt = 0;
let cnt2 = 0;

function todayRunning() {
    $.ajax({
        method: "get",
        url: "http://localhost:8080/listTodayRunning"
    }).done(function (response) {
        console.log(response)
        response.forEach((e) => {
            cnt++;
            const no = e.no;
            const title = e.title;
            const user = e.user;
            const location = e.location;
            const location2 = e.location2;
            const time = e.meet;
            const regDate = e.regDate;
            const modDate = e.modDate;

            let htmlText = "";
            htmlText +=
                `
                <tr>
                    <td>${cnt}</td>
                    <td>${title}</td>
                    <td>${user}</td>
                    <td>${location}</td>
                    <td>${location2}</td>
                    <td>${time}</td>
                `;
            if (e.modDate != null) {
                htmlText += ` <td>(수정일)${e.modDate}</td> `;
            } else {
                htmlText += ` <td>(작성일)${e.regDate}</td> `;
            }
            htmlText +=
                `
            <td>
                <button onClick="location.href='/message?no=${no}'">대화방
                </button>
            </td>
            `;

            if (e.user === loginUser) {
                htmlText += `
                       <td>
                       <button onclick="if(confirm('삭제하시겠습니까?'))deleteReview(${no})">삭제</button>
                       </td>
                        `;
            }
            htmlText +=
                `</tr>`;
            $(".container").append(htmlText);
        });
    }).fail(function (error) {
        console.log(error)
    })
}

document.onload = todayRunning();

function deleteReview(no) {
    $.ajax({
        method: "Delete",
        url: `/deleteTodayRunning?no=${no}`
    }).done(function (response) {
        console.log(response);
        location.href = `/todayRunning`;
    })
}

// <button onClick="if(confirm('수정하시겠습니까?'))updateReview(${no},'${user}','${title}','${location}','${location2}','${time}')">수정</button>
// function updateReview(no , content){
//     $('.form-container2').hide();
//     $(".form-container3").show();
//     $(".form-container3 input[name=no2]").val(no);
//     $(".form-container3 textarea").val(content);
// }

function searchKeyword() {
    $(".container").hide();
    let keyword = $("#keyword").val();
    console.log(keyword);
    $(".search-container").empty();
    cnt2 = 0;
    $.ajax({
        method: "get",
        url: "http://localhost:8080/listTodayRunning"
    }).done(function (response) {
        console.log(response)
        response.forEach((e) => {
            const no = e.no;
            const title = e.title;
            const user = e.user;
            const location = e.location;
            const location2 = e.location2;
            const time = e.meet;
            const regDate = e.regDate;
            const modDate = e.modDate;

            if (title.includes(keyword)) {
                cnt2++;
                let htmlText = "";
                htmlText +=
                    `
                <tr>
                    <td>${cnt2}</td>
                    <td>${title}</td>
                    <td>${user}</td>
                    <td>${location}</td>
                    <td>${location2}</td>
                    <td>${time}</td>
                `;
                if (e.modDate != null) {
                    htmlText += ` <td>(수정일)${e.modDate}</td> `;
                } else {
                    htmlText += ` <td>(작성일)${e.regDate}</td> `;
                }
                if (e.user === loginUser) {
                    htmlText += `
                       <td>
                       <button onclick="if(confirm('삭제하시겠습니까?'))deleteReview(${no})">삭제</button>
                       </td>
                        `;
                }
                htmlText +=

                    `</tr>`;
                $(".search-container").append(htmlText);
            }
        });
    }).fail(function (error) {
        console.log(error)
    })
}

// &user=${user}&loginUser=${loginUser}