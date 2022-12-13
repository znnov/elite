$(function(){
    // 모바일버튼을 클릭하면 모바일메뉴 보이기
    $('.m_btn').click(function(){
        $('.cover').fadeIn();
        $('.m_menu_warp').animate({'left':0},500);
        $('body,html').css('overflow','hidden');
    });
    // 커버를 클릭하면 모바일메뉴 숨기기
    $('.cover').click(function(){
        $('.cover').fadeOut();
        $('.m_menu_warp').animate({'left':'-100%'},500);
        $('body,html').css('overflow','auto');
    });
    // 아코디언 메뉴
    $('.m_menu_warp .m_menu>li').click(function(){
        // console.log("클릭")
        $(this).find('.m_depth2').slideToggle();
        $(this).siblings().find('.m_depth2').slideUp();
    });
    $('.visual').slick({
        autoplay: true,
        dots: true
    });
    $('.notice_slide').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });
    $('.model_list li').mouseenter(function(){
        var num=$(this).find('img').attr('src');
        var num2=num.replace('_off','_on');
        $(this).find('img').attr('src',num2);
      });
      $('.model_list li').mouseleave(function(){
        var num=$(this).find('img').attr('src');
        var num2=num.replace('_on','_off');
        $(this).find('img').attr('src',num2);
      });
    // 윈도우 창 브라우저 조절 상관없이 
    var num = $(this).width();
        console.log(num);
        if(num <= 749){
            $('main .visual .slick-arrow').hide();
            $('main .visual .slick-dots').show();
            // 메인이미지 교체 부분
            $('.visual1 img').attr('src','img/visual01_m.jpg');
            $('.visual2 img').attr('src','img/visual02_m.jpg');
            $('.visual3 img').attr('src','img/visual03_m.jpg');
            $('.visual4 img').attr('src','img/visual04_m.jpg');
            // section1 이미지 교체
            $('.box1 img').attr('src','img/img_story01_m.jpg');
            $('.box2 img').attr('src','img/img_story02_m.jpg');
            $('.box3 img').attr('src','img/img_story03_m.jpg');
            // section3 이미지 교체
            $('.notice_slide1 img').attr('src','img/img_blogevent160816_m.jpg');
            $('.notice_slide2 img').attr('src','img/img_facebookevent160816_m.jpg');
            $('.notice_slide3 img').attr('src','img/img_renewalevent1_m.jpg');
            $('.notice_slide4 img').attr('src','img/img_renewalevent2_m.jpg');
        }else{
            $('main .visual .slick-arrow').show();
            $('main .visual .slick-dots').hide();
            // 메인이미지 교체 부분
            $('.visual1 img').attr('src','img/visual01.jpg');
            $('.visual2 img').attr('src','img/visual02.jpg');
            $('.visual3 img').attr('src','img/visual03.jpg');
            $('.visual4 img').attr('src','img/visual04.jpg');
            // section1 이미지 교체
            $('.box1 img').attr('src','img/img_story01.jpg');
            $('.box2 img').attr('src','img/img_story02.jpg');
            $('.box3 img').attr('src','img/img_story03.jpg');
            // section3 이미지 교체
            $('.notice_slide1 img').attr('src','img/img_blogevent160816.jpg');
            $('.notice_slide2 img').attr('src','img/img_facebookevent160816.jpg');
            $('.notice_slide3 img').attr('src','img/img_renewalevent1.jpg');
            $('.notice_slide4 img').attr('src','img/img_renewalevent2.jpg');
        }
    // 윈도우 창 브라우저를 사이즈 조절했을때 이벤트
    $(window).resize(function(){
        var num = $(this).width();
        console.log(num);
        if(num <= 749){
            $('main .visual .slick-arrow').hide();
            $('main .visual .slick-dots').show();
            // 메인이미지 교체 부분
            $('.visual1 img').attr('src','img/visual01_m.jpg');
            $('.visual2 img').attr('src','img/visual02_m.jpg');
            $('.visual3 img').attr('src','img/visual03_m.jpg');
            $('.visual4 img').attr('src','img/visual04_m.jpg');
            // section1 이미지 교체
            $('.box1 img').attr('src','img/img_story01_m.jpg');
            $('.box2 img').attr('src','img/img_story02_m.jpg');
            $('.box3 img').attr('src','img/img_story03_m.jpg');
            // section3 이미지 교체
            $('.notice_slide1 img').attr('src','img/img_blogevent160816_m.jpg');
            $('.notice_slide2 img').attr('src','img/img_facebookevent160816_m.jpg');
            $('.notice_slide3 img').attr('src','img/img_renewalevent1_m.jpg');
            $('.notice_slide4 img').attr('src','img/img_renewalevent2_m.jpg');
        }else{
            $('main .visual .slick-arrow').show();
            $('main .visual .slick-dots').hide();
            // 메인이미지 교체 부분
            $('.visual1 img').attr('src','img/visual01.jpg');
            $('.visual2 img').attr('src','img/visual02.jpg');
            $('.visual3 img').attr('src','img/visual03.jpg');
            $('.visual4 img').attr('src','img/visual04.jpg');
            // section1 이미지 교체
            $('.box1 img').attr('src','img/img_story01.jpg');
            $('.box2 img').attr('src','img/img_story02.jpg');
            $('.box3 img').attr('src','img/img_story03.jpg');
            // section3 이미지 교체
            $('.notice_slide1 img').attr('src','img/img_blogevent160816.jpg');
            $('.notice_slide2 img').attr('src','img/img_facebookevent160816.jpg');
            $('.notice_slide3 img').attr('src','img/img_renewalevent1.jpg');
            $('.notice_slide4 img').attr('src','img/img_renewalevent2.jpg');
        }
    });
    $('footer .btn_top').click(function(){
        $('body,html').animate({'scrollTop':0},500);
    });
});