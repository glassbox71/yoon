$(function () {
    let wWidth = $(window).outerWidth();
    $(".util-menu>a").on("click", function () {
        if (wWidth <= 767) {
            $(".mo-menu-wrap").animate({
                "right": 0
            }, 500);
        }
    })

    $(".x-icon>a").on("click", function () {
        
        $(".mo-menu-wrap").animate({
            "right": "-100%"
        }, 500);
    })

    $(".mo-main-menu>li>a").on("click", function () {
        $(this).toggleClass("active").next(".mo-sub-menu").slideToggle(500);
        $(this).parent().siblings().children("a").removeClass("active").next(".mo-sub-menu").slideUp(300)
    });
    //css에 
    //  >a.active + .mo-sub-menu {
    //   display: block;
    // 를 주면 중복되서 안됨 active되는 것은 css에 중복으로 쓰면 안된다.}
    $(".mo-sub-menu>li>a").on("click", function () {
        $(this).toggleClass("active");
        $(this).parent().siblings().children("a").removeClass("active");
    });
})