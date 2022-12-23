let loginUser = $("#user").val();

function mypage() {
    console.log(loginUser)
    $.ajax({
        method: "get",
        url: `/search/user?user=${loginUser}`
    }).done(function (response) {
        console.log(response);
        const user = response.user;
        const name = response.name;
        const phone = response.phone;
        const email = response.email;
        const addressNumber = response.addressNumber;
        const address = response.address;
        const addressDetail = response.addressDetail;
        let htmlText = "";
        htmlText +=
            `
            <tr>
                <td>${user}</td>
                <td>${name}</td>
                <td>${phone}</td>
                <td>${email}</td>
                <td>${addressNumber}</td>
                <td>${address}</td>
                <td>${addressDetail}</td>
            </tr>    
            `;
        $(".container").append(htmlText);
    }).fail(function (error) {
        console.log(error);
    });
}

document.onload = mypage();