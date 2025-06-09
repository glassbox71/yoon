$(function () {
    let showBanner = 0;

    let liWidth = $(".main-slide>li:eq(0)").outerWidth();
    console.log(liWidth);

    let first = $(".main-slide>li:eq(0)").clone();
    $(".main-slide").append(first);

    let liCount = $(".main-slide>li").length;
    console.log(liCount);

    $(".main-slide").outerWidth(liWidth * liCount);

    let showNum
    //윈도우의 너비값
    let wWidth
    //부모의 너비값
    let pWidth;
    //함수만들기
    function siteInit() {
        showBanner = 0;
        $(".main-slide").css("margin-left", 0)
        wWidth = $(window).outerWidth();
        if (wWidth > 767) {
            showNum = 1;
        }
        console.log(showNum);

        pWidth = liCount * 100 / showNum
        $(".main-slide").outerWidth(pWidth + "%");
        liWidth = $(".main-slide>li").outerWidth();

    }
    function moveBanner() {

        $(".main-slide").stop().animate({
            "margin-left": -liWidth * showBanner
        }, 1000)

        if (showBanner == 3) {
            $(".pager-dot>li").eq(0).addClass("active")
                .siblings().removeClass("active");
        }
        else {
            $(".pager-dot>li").eq(showBanner).addClass("active")
                .siblings().removeClass("active");
        };
    }
    //윈도우 리사이즈
    $(window).on("resize", function () {
        siteInit();
    })
    //오른쪽 클릭
    $(".right-arrow").on("click", function () {
        if (showBanner == 3) {
            $(".main-slide").css("margin-left", 0);
            showBanner = 0;
        }
        showBanner++;
        moveBanner();
    })
    //왼쪽 클릭
    $(".left-arrow").on("click", function () {
        if (showBanner == liCount) {
            showBanner = 2;
            $(".main-slide").css("margin-left", -liWidth * 2);
        }
        showBanner--;
        moveBanner();
    })

    //메인 슬라이드 - 페이져 클릭할 경우
    $(".pager-dot>li").on("click", function () {
        showBanner = $(this).index();
        console.log(showBanner);
        moveBanner();
    })

    //전시안내 탭메뉴
    $(".gallery-list>li").click(function () {
        let selectNum = $(this).index();
        console.log(selectNum);
        $(this).addClass("active").siblings().removeClass("active");

        $(".gallery-title-slide>p").eq(selectNum).addClass("onP").siblings().removeClass("onP");

        $(".gallery-img>li").eq(selectNum).addClass("on")
            .siblings().removeClass("on");
    })

    //매헌기념관 소식 모바일버전 박스 업 다운
    $(".info-list-box").click(function (e) {
        $(this).toggleClass("on");
    })

    $(".site-map-list a").on("click", function (e) {
      e.preventDefault(); // 기본 동작 방지
      var target = $(this).attr("href");
      var offset = $(target).offset().top;
      $("html, body").animate({ scrollTop: offset }, 500);
    });
})