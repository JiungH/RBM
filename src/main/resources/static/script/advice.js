function advice() {
    $.ajax({
        method: "get", url: "https://api.adviceslip.com/advice"
    }).done(function (response) {
        console.log(response);
        const result = response.substring(31);
        const result2 = result.split('}');
        $(".advice").append(`<a>${result2[0]}</a>`);
    });
}