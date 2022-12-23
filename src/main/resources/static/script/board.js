let cnt = 0;

function board() {
    $.ajax({
        method: "get", url: "http://localhost:8080/search/boardList"
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
            htmlText += `<tr>
                    <td>${cnt}</td>
                    <td><a href="boardView?no=${no}&viewCnt=${viewCnt}">${title}</a></td>
                    <td>${user}</td> 
                    `;
            if (e.modDate != null) {
                htmlText += ` <td>(수정일)${e.modDate}</td> `;
            } else {
                htmlText += ` <td>(작성일)${e.regDate}</td> `;
            }
            htmlText += ` <td>${viewCnt}</td> 
               </tr>`;
            $(".container").append(htmlText);
        });
    }).fail(function (error) {
        console.log(error)
    });
}

document.onload = board();