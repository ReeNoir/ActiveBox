$(function() 
{

    // Fixed Header
    let header = $("#header");
    let header_inner = $("#header_inner");
    let intro = $("#intro");
    let introH = intro.height();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function()
    {

        introH = intro.height();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH)
    {
        if(scrollPos > introH)
        {
            header.addClass("fixed");
            header_inner.addClass("disapear");
        }
        else
        {
            header.removeClass("fixed");
            header_inner.removeClass("disapear");
        }
    }


    // Smooth Scroll
    $("[data-scroll]").on("click", function()
    {

        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementPosition = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate
        ({
            scrollTop: elementPosition - 85
        }, 500);

    });


    // Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) 
    {

        event.preventDefault();

        nav.toggleClass("show");

    });


    // Testimonails https://kenwheeler.github.io/slick/
    let slider = $("#testimonails_slider");

    slider.slick(
    {
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        slidesToShow: 1,
        fade: true,
    });

});