let loginUser = $("#user").val();
let cnt = 0;

function board() {
    $.ajax({
        method: "get",
        url: `/getBoardUser?user=${loginUser}`
    }).done(function (response) {
        console.log(response)
        response.forEach((e) => {
            cnt++;
            const no = e.no;
            const title = e.title;
            const user = e.user;
            const regDate = e.regDate;
            const modDate = e.modDate;
            const viewCnt = e.viewCnt;
            let htmlText = "";
            htmlText +=
                `<tr>
                    <td>${cnt}</td>
                    <td><a href="boardView?no=${no}&viewCnt=${viewCnt}">${title}</a></td>
                    <td>${user}</td> 
                    `;
            if (e.modDate != null) {
                htmlText += ` <td>(수정일)${e.modDate}</td> `;
            } else {
                htmlText += ` <td>(작성일)${e.regDate}</td> `;
            }
            htmlText +=
                ` <td>${viewCnt}</td> 
               </tr>`;
            $(".board-container").append(htmlText);
        });
    }).fail(function (error) {
        console.log(error)
    });
}

document.onload = board();


let cnt2 = 0;

function todayRunning() {
    $.ajax({
        method: "get",
        url: `getTodayRunningUser?user=${loginUser}`
    }).done(function (response) {
        console.log(response)
        response.forEach((e) => {
            cnt2++;
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
            $(".todayRunning-container").append(htmlText);
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



