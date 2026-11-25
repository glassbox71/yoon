$(function () {
    const mobileLayout = window.matchMedia("(max-width: 1099px)");
    const root = document.documentElement;
    const menu = document.querySelector("#mobile-menu");
    const opener = document.querySelector('[aria-controls="mobile-menu"]');
    const closer = menu.querySelector(".x-icon > a");

    function setMenuOpen(open) {
        menu.inert = !open;
        menu.classList.toggle("is-open", open);
        root.classList.toggle("mobile-menu-open", open);
        opener.setAttribute("aria-expanded", String(open));

        if (open || mobileLayout.matches) {
            (open ? closer : opener).focus({ preventScroll: true });
        }
    }

    opener.addEventListener("click", function (event) {
        if (mobileLayout.matches) {
            event.preventDefault();
            setMenuOpen(true);
        }
    });

    closer.addEventListener("click", function (event) {
        event.preventDefault();
        setMenuOpen(false);
    });

    menu.addEventListener("click", function (event) {
        if (event.target === menu) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !menu.inert) {
            setMenuOpen(false);
        }
    });

    mobileLayout.addEventListener("change", function (event) {
        if (!event.matches && !menu.inert) {
            setMenuOpen(false);
        }
    });

    $(".mo-main-menu > li > a").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active").next(".mo-sub-menu").stop(true, true).slideToggle(500);
        $(this).parent().siblings().children("a").removeClass("active")
            .next(".mo-sub-menu").stop(true, true).slideUp(300);
    });

    $(".mo-sub-menu > li > a").on("click", function (event) {
        if (this.hash === "#void") {
            event.preventDefault();
        }
        $(this).toggleClass("active");
        $(this).parent().siblings().children("a").removeClass("active");
    });
});
