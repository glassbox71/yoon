$(function () {
    const header = $("#yoon-hd");
    const sections = $("main > section");
    const links = $(".site-map-list > li");

    function updateNavigation() {
        const scrollTop = window.scrollY;
        const sectionLine = scrollTop + parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) + 2;
        let activeIndex = 0;

        sections.each(function (index) {
            if ($(this).offset().top <= sectionLine) {
                activeIndex = index + 1;
            }
        });

        header.toggleClass("whiteBg", scrollTop > 0);
        links.eq(activeIndex).addClass("active").siblings().removeClass("active");
    }

    $(window).on("scroll resize load", updateNavigation);
    updateNavigation();

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