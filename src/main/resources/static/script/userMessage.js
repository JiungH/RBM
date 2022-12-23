let loginUser = $("#user").val();
let cnt = 0;

function getMassageUser() {
    $.ajax({
        method: "get",
        url: `/getMessageUser?recv=${loginUser}`
    }).done(function (response) {
        console.log(response);
        response.forEach((e) => {
            if (loginUser !== e.send) {
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
                    <td><a href="message?no=${e.room}">${content}</a></td>
                    <td>${time}</td>
                `;
                htmlText += `
                </tr>
                `;
                $(".container2").append(htmlText);
            }
        });

    }).fail(function (error) {
        console.log(error);
    });
}

document.onload = getMassageUser();