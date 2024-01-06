$(document).ready(function() {
    let elevation = $("#tabs").offset().top;
    $(document).scroll(function () {
        var nav = $("#tabs");
        if (nav.hasClass('normalTabs')) {
            elevation = nav.offset().top;
        }
        nav.toggleClass('scrolledTabs', $(this).scrollTop() > elevation);
        nav.toggleClass('normalTabs', $(this).scrollTop() <= elevation);
    });

    $(".tab").click(function() {
        $(".focused").removeClass('focused');
        $(".focusContent").removeClass('focusContent');
        $(this).addClass('focused');
        let name = $(this).attr('id').replace('Tab', '');
        let content = "#" + name + "Content"
        $(content).addClass('focusContent');
        if ($(window).scrollTop() < 100) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#content").offset().top
            }, 1000);
        }
    })
})
