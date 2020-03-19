function lang() {
    $('.lang').on('click', function () {
        $('.lang_list').show();
    })

    $('.lang_list li').on('click', function () {
        $('.lang_list').hide();
    })
    $('.lang_list').on('mouseleave', function () {
        $('.lang_list').hide();
    })
}

function sidemenu() {
    $('.plus_btn').on('click', function (e) {
        e.preventDefault();
        $('.sidemenu * ').css('transition', 'transform 0.2s ease')
        if ($('.plus_btn').hasClass('opened') == false) {
            $('.plus_btn').css('transform', 'rotate(-45deg)')
            $('.plus_btn').addClass('opened')

            $('.sidemenu > div').fadeIn()
        } else {
            $('.plus_btn').css('transform', 'rotate(0deg)')
            $('.plus_btn').removeClass('opened')

            $('.sidemenu > div').fadeOut()
        }

    })
}

function scroll() {
    //    console.log()
    $(window).scroll(function () {
        if ($(window).scrollTop() >= ($('section:eq(1)').offset().top) - 100) {
            $('.top_menu a').css('color', '#300001');
            $('.plus_btn').click(function () {
                $('.menuback_wrap').css('display', 'block');
                if ($('.plus_btn').hasClass('opened') == true) {
                    $('.menu_back').show();
                    $('.menu_back').animate({
                        width: '1500px',
                        height: '1500px',
                        top: '-200px',
                        right: '-250px'
                    })
                } else {
                    $('.menu_back').css('display', 'none');
                    $('.menuback_wrap').css('display', 'none');
                }
            })
            if ($('.plus_btn').hasClass('opened') == true) {
                $('.menuback_wrap').css('display', 'block');
                $('.menu_back').show();
                $('.menu_back').css({
                    width: '1500px',
                    height: '1500px',
                    top: '-200px',
                    right: '-250px'
                })
            } else {
                $('.menu_back').css('display', 'none');
                $('.menuback_wrap').css('display', 'none');
            }

        } else {
            $('.top_menu a').css('color', '#fff');
            $('.menuback_wrap').css('display', 'none');
            $('.menu_back').css('display', 'none');

        }


        if ($(window).scrollTop() >= 50) {
            $('.topbtn').fadeIn('slow')
        } else {
            $('.topbtn').fadeOut('slow')
        }
    })

    $('.top_menu > li').click(function () {
        liidx = $(this).index()
        var sect_offset = $('#wrapper > section').eq(liidx + 1).offset().top;
        $('html,body').animate({
            scrollTop: sect_offset
        }, 500)

    })

    $('.morebtn').click(function () {
        $('.story').css('height', '150vh')
        $('.tourPic').animate({
            'height': '800px'
        }, 200)
    })

    $('.topbtn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })
}


/*배열*/
function array_cont(){
    var title=[]; //제목
    title[0]=['한류스타거리','한류 문화와 스타를 사랑하는 해외 관광객들을 위한 강남구의 특별한프로젝트.<br> 이름에서 알 수 있듯이 ‘Star’라는 키워드에 초점을 맞춰 강남구의 청담동·신사동·논현동 일대에서<br> 한류 스타들이 즐겨 찾는 단골 숍과 그들의 라이프 스타일을 엿볼 수 있는 공간을 담아냈습니다.'];
    title[1]=['압구정&로데오거리','1990년대 초 기존의 질서를 탈피하려는 젊은이들이 베벌리힐스의 로데오 거리를 표방하면서<br> 압구정동의 패션 거리를 로데오거리로 이름 붙인 데서 유래되었습니다.<br>1950~60년대까지만 해도 말이 지나다니던 길이었던 미국 LA 서쪽 베벌리힐스의 로데오 드라이브는<br> 1970년대부터 최고급 명품점이 즐비한 세계적인 패션 거리로 우뚝 섰습니다. 압구정 로데오거리도 비슷합니다.<br> 1980년대 말부터 압구정로 남35길, 선릉로 서14길의 440m 구간에<br> 고급 의류, 잡화 매장이 들어서면서 패션의 중심가로 자리매김 했습니다.<br> 외국계 브랜드가 국내에서 성공 여부를 가늠하기 위해 운영하는 파일럿(시험) 매장이 잇따라 들어섰습니다.이렇게 시작된 압구정 로데오 거리는 한국 패션의 유행을 선도하는 역할을 자임했습니다.<br> 패션의 1번지인 만큼 거리가 잘 보이는 야외 카페에 앉아<br> 지나가는 청춘 남녀를 구경하는 것만으로도 서울 패션의 현주소를 읽을 수 있을 것 입니다.<br><br>찾아가는 길 : 지하철 분당선 압구정로데오역 6번출구 '];
    title[2]=['강남스타일 랜드마크','전세계를 말춤 열풍으로 달군 가수 싸이의 ‘강남스타일’을 스토리텔링으로 담은<br> 높이 5.3m, 폭 8.3m의 랜드마크로, 무대 위에 올라가면 ‘강남스타일’ 후렴구가 흘러나옵니다.<br>강남스타일 노래에 맞춰 반짝이는 조명 밑에서 말춤 댄스를 춰보는 신나는 경험과 함께,<br> 조형물을 배경으로 강남에 다녀간 인증샷을 남겨보시기 바랍니다. '];
    title[3]=['강남역','강남의 대표적인 명소로써 영화관, 대형서점, 맛집 및 패션매장 등이 밀집해 있어 먹거리, 볼거리, 즐길거리가 가득합니다.<br>강남역 지하 쇼핑상가는 최신 트렌드의 옷들을 비교적 저렴한 가격으로 만나볼 수 있으며,<br> 강남역 광장(11번출구) M스테이지에서는 각종 거리공연, 한류스타 콘서트 등 다채로운 이벤트가 진행됩니다.<br>또한 강남의 주요 관광명소를 순환하는 시티투어 버스가 이곳에서 출발하여 강남역 일대는<br> 내, 외국인 관광객들의 방문이 끊이지 않고 있습니다. '];
    title[4]=['봉은사','조선시대 한양에서 가장 큰 사찰이었다는 과거의 위세가 오늘도 그대로 전해지고 있는 봉은사는 그 역사만도 1000년이 넘습니다. ‘견성사’라는 이름으로 창건되었던 봉은사는 조선시대 성종의 무덤인 선릉을 조성하며 사찰을 중창했고 그때부터 ‘봉은사’라고 불리우고 있습니다.현재 봉은사는 하루 200~300명의 외국인 관광객이 다녀가는 서울의 대표적 사찰로 각광받고 있습니다.뿐만 아니라 서울시민들에겐 더없이 좋은 휴식처이자, 템플스테이와 템플라이프를 운영하여 바쁜 현대인들에게 스스로를 돌아볼 수 있는 성찰의 기회도 제공하고 있습니다.'];
    title[5]=['가로수길','아기자기한 카페와 맛집, 디자이너 샵 등 쇼핑공간이 즐비하여 특유의 낭만과 은근한 여유가 있는 이국적인 거리입니다. 유명인사들과 패션 피플들이 즐겨찾아 더욱 유명합니다. 최근엔 가로수길의 양 옆 골목을 따라 흩어져 있는 사잇길, 일명 세로수길에 특색 있는 카페와 음식점이 늘어나 또 다른 볼거리를 제공하고 있습니다.한국에서 유행하는 최신 스타일과 맛집을 찾는다면 가로수길이 안성맞춤입니다.'];
    
    
    //내용삽입
    $('.tourPic > ul li').click(function(){
        idx=$(this).index();
//        console.log($(this).index())
        
        //모달팝업 id
        $('.showmodal').prop('id','Modal'+(idx+1));
        
        //삭제먼저
        $('.modaltitle').text(''); 
        $('.saysomething').text(''); 
        
        $('.modaltitle').text(title[idx][0]); //제목
        $('.saysomething').append(title[idx][1]); //내용
        $('.showmodal img').attr('src','images/tourimg_'+(idx+1)+'.jpg');
        $('.showmodal img').attr('alt',title[idx][0]);
    })
}


//검색
function srch() {
    $('.search_btn').on('click',function(){
        $('.srchfrm').show();
        $('.srch_box').animate({
            width:'70%'
        })
        $('.gobtn').fadeIn('fast');
    })
    
}


$(document).ready(function () {
    lang();
    sidemenu();
    scroll();
    array_cont();
    srch();
})
