

   $(document).ready(function () {

    AOS.init();


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
      

    // 비디오 버튼 눌렀을때 버튼사라지게
    $(".v_inner .v_btn").click(function () {
        $(".v_inner .v_btn ").hide()
    });

    // 자동재생  // 익스플로어 재생 안됌 수정※
    var video = document.querySelector("video"),
        button = document.querySelector(".v_btn");


    button.addEventListener("click", function () {
        video.play()
        //video.setAttribute("autoplay","autoplay")// this will set the attribute but will not play 
    }, false);
   


    
    // 메인 슬라이드
    
  var swiper = new Swiper(".MainSwiper", {
    autoplay:false,
    speed: 400,
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

    //con슬라이드
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  //scoll top

  let Tbtn = $(".btnTop"); //Tbtn = top button의미
  Tbtn.click(() => {
    $(window).scrollTop(0);
    //수직상의 (위치값) 으로 이동
    //버튼을 클릭했을 때 창이 0값으로 올라감
  });



// 스크롤시 musium 글보이게
//   $(window).scroll( function(){
//     $('.musium .mbox .Bbox span').each( function(i){
        
//         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//         var bottom_of_window = $(window).scrollTop() + $(window).height();
        
//         if( bottom_of_window > bottom_of_element ){
//             $(this).animate({'opacity':'1','margin-left':'0px'},500);
//         }
        
//     }); 
// });


    /////////////////////////////
});

