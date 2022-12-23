let cnt = 0;
let no = $("#no").val();
let loginUser = $("#user").val();
let title = "";
let user = "";

function message() {
    $.ajax({
        method: "get",
        url: `/getRunning?no=${no}`
    }).done(function (response) {
        console.log(response)
        const title = response.title;
        const user = response.user;
        const location = response.location;
        const location2 = response.location2;
        const time = response.meet;
        const regDate = response.regDate;

        let htmlText = "";
        htmlText +=
            `
                <tr>
                    <td>${title}</td>
                    <td>${user}</td>
                    <td>${location}</td>
                    <td>${location2}</td>
                    <td>${time}</td>
                    <td>(작성일)${regDate}</td>
                `;
        $(".container").append(htmlText);
    }).fail(function (error) {
        console.log(error);
    });
}

document.onload = message();


function getMassage() {
    $.ajax({
        method: "get",
        url: `/getMessage?room=${no}`
    }).done(function (response) {
        console.log(response);
        response.forEach((e) => {
            cnt++;
            const send = e.send;
            const content = e.content;
            const time = e.regDate;

            let htmlText = "";
            htmlText +=
                `
                <tr>
                    <td>${cnt}</td>
                    <td>${send}</td>
                    <td>${content}</td>
                    <td>${time}</td>
                `;

            if (send === loginUser) {
                htmlText +=
                    `
                <td>
                <button onclick="if(confirm('삭제하시겠습니까?'))deleteReview(${e.no},${send})">삭제</button>
                </td>
                `
            }
            htmlText += `
                </tr>
                `;
            $(".container2").append(htmlText);
        })
    }).fail(function (error) {
        console.log(error);
    });
}

document.onload = getMassage();

function deleteReview(no2, send) {
    $.ajax({
        method: "Delete",
        url: `/deleteSendMessage?no=${no2}&send=${send}`
    }).done(function (response) {
        console.log(response);
        location.href = `/message?no=${no}`;
    })
}