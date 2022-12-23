const noImage = "https://www.pyeongtaek.go.kr/common/images/etc/ready.jpg";

const CNT = 12;
let page = 1;
let lastPage = 100;

$(".backBtn").hide();
$(".nextBtn").hide();

function searchFestival(){
let date = $("#date").val();
let data = [];
data = date.split('-');
date = data[0]+data[1]+data[2];
console.log(date);
    $('.container').empty();
    $.ajax({
        method:"get",
        url:"http://apis.data.go.kr/B551011/KorService/searchFestival",
        data:{
            numOfRows:100,
            _type:'json',
            serviceKey:'tkBvu0Nt4vpZX3hOvn+A1d0Ot2TygFhlJsQGDzZ4iC8yM0Io1muxlein9iXkDNSmOBewsagkswKUKAtA1AJj/A==',
            MobileOS:'ETC',
            MobileApp:'AppTest',
            eventStartDate: date
        }
    }).done(function(response){
        console.log("response : ", response);
        const items = response.response.body.items.item;
        items.forEach((e) =>{
            if(e.title.indexOf('마라톤')===4) {
                const firstimage = e.firstimage;
                const title = e.title;
                const addr1 = e.addr1;
                const eventstartdate = e.eventstartdate;
                const eventenddate = e.eventenddate;

                $(".head").show();
                $(".container").append(
                    `<ol class="content">
                    <li class = "imgs"><a><img src ="${firstimage}" id = "firstimg"></a></li>
 				    <li id = "title">${title}</li>
					<li>${eventstartdate}</li>
					<li>${eventenddate}</li>
					<li>${addr1}</li>
				</ol>`
                );

            }
        })
        $('.container').append(
            `
	</div>
	`
        );
        $('.back_button').hide();
        $('.next_button').hide();

        if(page !== lastPage){
            $('.next_button').show();
        }
        if(page!==1){
            $('.back_button').show();
        }
    });
}

function firstSearchFestival(){
    page = 1;
    searchFestival();
}

function getDataBack(){
    if(page > 1){
        page--;
        searchFestival();
    }
}

function getDataNext(){
    if(page!==lastPage){
        page++;
        searchFestival();
        $('.back_button').show();
    }

}
