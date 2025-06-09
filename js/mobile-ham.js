$(function(){
    $(".util-menu>a").on("click", function(){
        $(".mo-main-wrap").show();
    })

    $(".x-icon>a").on("click", function(){
        $(".mo-main-wrap").hide();
    })
    
    $(".mo-main-menu>li>a").on("click", function(){
        $(this).toggleClass("active").next(".mo-sub-menu").slideToggle(500);
        $(this).parent().siblings().children("a").removeClass("active").next(".mo-sub-menu").slideUp(300)
    });
     //css에 
     //  >a.active + .mo-sub-menu {
        //   display: block;
        // 를 주면 중복되서 안됨 active되는 것은 css에 중복으로 쓰면 안된다.}
    $(".mo-sub-menu>li>a").on("click", function(){
        $(this).toggleClass("active");
        $(this).parent().siblings().children("a").removeClass("active");
    });
})