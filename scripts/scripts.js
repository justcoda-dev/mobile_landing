import ScrollNavigation from "./ScrollNavigation.js"

$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        navigationText: ["<i class='owl-prev'> < </i>", "<i class='owl-next'> > </i>"]
    });

    const $burgerMenu = $(".header__menu")
    const $burgerButton = $(".header__burger")
    const $header = $(".header")

    const $scrollPoints = $("#main, #review, #comments, #buy, #delivery")
    const $headerMenuList = $(".header__menu-list-item")

    const navListScroll = new ScrollNavigation([...$headerMenuList], [...$scrollPoints])
    navListScroll.setNavClickListener()

    for (const headerItem of $headerMenuList) {
        console.log(headerItem)
        $(headerItem).click(() => {
            console.log("click")
            $burgerMenu.hide()
        })
    }

    $burgerButton.click(() => $burgerMenu.toggle())
    $(window).scroll((e) => {

    })
})