$(function () {
    let sPos = [0];
    let sCount = $("main>section").length;
    for (i = 1; i <= sCount; i++) {
        sPos[i] = $("main>section").eq(i - 1).offset().top;
    }
    console.log(sPos);

    let posY;
    $(window).on("scroll", function () {
        posY = $(this).scrollTop();
        if (posY > sPos[0]) {
            $("header").addClass("whiteBg")
        }
        else {
            $("header").removeClass("whiteBg");
            $(".site-map-list>li").eq(0).addClass("active").siblings().removeClass("active")
        }

        // console.log(sScroll);
        for (i = 1; i <= sCount; i++) {
            if (posY > (sPos[i]-200)) {
                $(".site-map-list>li").eq(i).addClass("active").siblings().removeClass("active")
            }
        }        
    })
    
    //헤더 lang영역 언어박스
    $(".lang-list").on("click",function(e){
        $(this).toggleClass("on");
    })

    //히어로 영역 메인타이틀 모바일 박스
    $("#yoon-hero-wrap>.title-wrap").on("click", function(e){
        // let selectNum = $(this).index();
        // console.log(selectNum);        
        $(this).toggleClass("active");
    })




    $(".gnb").hover(function () {
        $("h1").addClass("logoB")
    }, function () {
        $("h1").removeClass("logoB")
    })
    $(".gnb").hover(function () {
        $(".lang-list").addClass("lang-listB")
    }, function () {
        $(".lang-list").removeClass("lang-listB")
    })
    $(".gnb").hover(function () {
        $(".icon-sort").addClass("icon-sortB")
    }, function () {
        $(".icon-sort").removeClass("icon-sortB")
    })    
})