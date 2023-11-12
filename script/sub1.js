$(function () {


    let e1t = "돌담을 지나 세로로 긴 문 사이로 하늘, 벽, 물, 용 모양의 상징물과 태양의 움직임에 따라 하늘을 담는 물의 반사가 달라지면서 대자연의 움직임을 느껴보는공간입니다."

    let e2t = "수풀 사이에 헛간의 모습을 하고 있는 풍 박물관은 적송을 판으로 이어 바람이 드나들 수 있도록 하였습니다. 긴 복도를 걷거나 돌 오브제에 앉아 외부의 나무판 틈새로 바람이 통과하는소리에 귀 기울이는 공간입니다."

    let e3t = "산화 강판으로 만든 석(石) 박물관은 빨갛게 녹이 슨 직사각형의 모습으로 위치하고 있습니다. 박물관 앞에 손 모양의 돌 조각을 올려놓아 가까이 있는 손과 멀리 보이는 산방산이 대비되어 리듬감 있는 명상을 가능하게 합니다."


    let t1 = "수(水)_물의공간"

    let t2 = "풍(風)_바람의공간"

    let t3 = "석(石)_돌의공간"


    let s1 = "수미술관은 물의 공간입니다."

    let s2 = "풍미술관은 바람의 공간입니다."

    let s3 = "석미술관은 돌의 공간입니다."


    let etext = $(".etext")
    let etitle = $(".Ttext h3")
    let esub = $(".Ttext h5")
    let big = $(".big");//큰 이미지
    let e1i = $(".e1"); //작은 이미지
    let e2i = $(".e2");
    let e3i = $(".e3");


    e1i.click(function () {

        etext.text(`${e1t}`);
        big.attr("src","./img/e1.png")
        etitle.text(`${t1}`)
        esub.text(`${s1}`)
        $('.e1').css({ filter:'grayscale(0)'})
        $('.e2').css({ filter:'grayscale(80%)'})
        $('.e3').css({ filter:'grayscale(80%)'})
    });

    e2i.click(function () {

        etext.text(`${e2t}`);
        big.attr("src","./img/e2.png")
        etitle.text(`${t2}`)
        esub.text(`${s2}`)
        $('.e1').css({ filter:'grayscale(80%)'})
        $('.e2').css({ filter:'grayscale(0%)'})
        $('.e3').css({ filter:'grayscale(80%)'})
    });
    

    e3i.click(function () {

        etext.text(`${e3t}`);
        big.attr("src","./img/e3.png")
        etitle.text(`${t3}`)
        esub.text(`${s3}`)
        $('.e1').css({ filter:'grayscale(80%)'})
        $('.e2').css({ filter:'grayscale(80%)'})
        $('.e3').css({ filter:'grayscale(0%)'})
    });



// 햄버거바 애니메이션

    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });

    // 네비메뉴 마우스 오버
    $(".openmenu ul li a").mouseover(function () {
        $(".circle--2").stop(true).animate({ width: '30px', height: '30px' })
    });
    $(".openmenu ul li a").mouseout(function () {
        $(".circle--2").stop(true).animate({ width: '6px', height: '6px' })
    });


// open페이지 열고 닫기
    let banner = $(".openbox");
    let btn = $("#nav-icon4");
    
    btn.click(function(){
        banner.toggleClass("open");

        if(banner.hasClass("open")){
            banner.fadeIn()
            btn.find("span").css({backgroundColor:'#fff'});
            $(".h_inner h1 img").attr('src','./img/flogo.svg')
            // $(".h_inner h1 img").css({width:'182px'})
        }else{
            banner.fadeOut()
            btn.find("span").css({backgroundColor:'#000'});
            $(".h_inner h1 img").attr('src','./img/h1Logo_b.png')
        }
    });      

// 메뉴 drop down
    let menu = $(".m_box .m_inner ul .submenu");
    let mboxBtn = $(".m_box .m_inner .mbtn");
    
    mboxBtn.click(function(){
        menu.toggleClass("open");

        if(menu.hasClass("open")){
            menu.slideDown()
            $(".m_box .m_inner .mbtn").css({transform:'rotate(-90deg)',transition: '.5s'})
        }else{
            menu.slideUp()
            $(".m_box .m_inner .mbtn").css({transform:'rotate(0deg)',transition: '.5s'})
        }
     })

  //scoll top

  let Tbtn = $(".btnTop"); //Tbtn = top button의미
  console.log(Tbtn)
  Tbtn.click(() => {
    $(window).scrollTop(0);
    //수직상의 (위치값) 으로 이동
    //버튼을 클릭했을 때 창이 0값으로 올라감
  });
  
// slide
var swiper = new Swiper(".MainSwiper", {
    autoplay:true,
    speed: 500,
    effect: 'fade',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});