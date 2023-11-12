$(function () {

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
  


});