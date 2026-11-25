$(function () {
    const panels = [...document.querySelectorAll("#yoon-hero-wrap, main > section, #yoon-ft")];
    const root = document.documentElement;
    let wheelTimer;

    window.addEventListener("wheel", function (event) {
        if (event.ctrlKey || !event.deltaY || Math.abs(event.deltaX) >= Math.abs(event.deltaY) ||
            event.target.closest(".mo-menu-wrap")) {
            return;
        }

        const atTop = window.scrollY < 2;
        const inset = parseFloat(getComputedStyle(root).scrollPaddingTop);
        const index = atTop ? 0 : panels.findIndex(panel => {
            const bounds = panel.getBoundingClientRect();
            return Math.abs(bounds.top - inset) < 3 && bounds.bottom <= window.innerHeight + 2;
        });
        const nextPanel = panels[index + Math.sign(event.deltaY)];

        if (wheelTimer || (index >= 0 && nextPanel)) {
            event.preventDefault();
            if (!wheelTimer) {
                nextPanel.scrollIntoView();
            }
            clearTimeout(wheelTimer);
            wheelTimer = setTimeout(() => { wheelTimer = undefined; }, 350);
        }
    }, { passive: false });

    let showBanner = 0;

    const slide = $(".main-slide");
    const originalCount = slide.children().length;
    slide.append(slide.children().first().clone());

    let liWidth;

    function siteInit() {
        liWidth = slide.parent().width();
        slide.stop().width(liWidth * slide.children().length);
        slide.children().css("flex", "0 0 " + liWidth + "px");
        showBanner %= originalCount;
        slide.css("margin-left", -liWidth * showBanner);
    }

    siteInit();

    function moveBanner() {

        $(".main-slide").stop().animate({
            "margin-left": -liWidth * showBanner
        }, 1000)

        if (showBanner === originalCount) {
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
        if (showBanner === originalCount) {
            $(".main-slide").css("margin-left", 0);
            showBanner = 0;
        }
        showBanner++;
        moveBanner();
    })
    //왼쪽 클릭
    $(".left-arrow").on("click", function () {
        if (showBanner === 0) {
            showBanner = originalCount;
            slide.stop().css("margin-left", -liWidth * originalCount);
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

})
