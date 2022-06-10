$(window).on("load", function() {
    var t = $("#sub_1")
        , t2 = $("#sub_2")
        , t3 = $("#sub_3");
    $(".section_cls .container_cust");
    function animate_type() {
        var i=0,tx=t.text();function typeWriter(){t.addClass("active"),i<tx.length&&(document.getElementById("sub_1").innerHTML+=tx.charAt(i),i++,setTimeout(typeWriter,200))}t.empty(),setTimeout(function(){typeWriter()},1200);var i2=0,t2x=t2.text();function typeWriter2(){t2.addClass("active"),i2<t2x.length&&(document.getElementById("sub_2").innerHTML+=t2x.charAt(i2),i2++,setTimeout(typeWriter2,200))}t2.empty(),setTimeout(function(){typeWriter2()},3e3);var i3=0,t3x=t3.text();function typeWriter3(){t3.addClass("active"),i3<t3x.length&&(document.getElementById("sub_3").innerHTML+=t3x.charAt(i3),i3++,setTimeout(typeWriter3,200))}$("#sub_3").empty(),setTimeout(function(){typeWriter3()},4800)
        $("#hero_imgs .img_res").each(function(e) {
            var k = $(this);
            s = 500 + (e * 750)
            setTimeout(function() {
                k.addClass("slideInDown");
            }, s);
        })
        $("#hero_imgs .img_res").removeClass("slideInDown");
        $(".sub_header").removeClass("active");
    }
    animate_type();
    setInterval(animate_type, 20000)
    $(".preset_cls").hover(function() {
        $(".preset_cls").addClass("active")
        // setTimeout(function(){
        //     $(".preset_cls").removeClass("active")
        // }, 2000)
    })

    $(".preset_cls").mouseout(function() {
        $(".preset_cls").removeClass("active")
        // setTimeout(function(){
        //     $(".preset_cls").removeClass("active")
        // }, 2000)
    })

    $(".li_cls, .scroll_down img").on("click", function() {
        var k = $(this).attr("data-target");
        $('.li_cls').removeClass("active");
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop: $("#" + k).offset().top - ($(window).height() / 10)
        }, 500);
    })

    $(document).on("scroll", function() {
        offset_sect()
    })
    offset_sect();
    function offset_sect() {
        var window_h = $(window).height();
        $(".section_cls").each(function() {
            var w = ($('html').scrollTop() + (window_h / 2) > $(this).offset().top);
            if (w) {
                $(this).find(".container_cust ").addClass("fadeInDown");
                $(".li_cls").removeClass("active");
                $('.li_cls[data-target="' + $(this).attr('id') + '"]').addClass("active")
                if ($(this).attr("id") == "section_2") {
                    $(".preset_cls").removeClass("pre")
                }
                if ($(this).attr("id") == "section_3") {
                    $(".tile_imgs").addClass("fadeInDown")
                }

            }
            // else {
            //     $(this).find(".container_cust ").removeClass("fadeInDown");
            //     $('.li_cls[data-target="'+$(this).attr('id')+'"]').removeClass("active")
            //     if($(this).attr("id") == "section_2") {
            //         $(".preset_cls").addClass("pre")
            //    }
            // }
        })
    }
    var x = 12;
    for (var i = 0; x > i; i++) {
        var w = i + 1;
        if (w <= 3 || w == 10) {
            $('[tile="1"] .tile_cls').append('<img src="assets/images/content/tile_card_' + w + '.jpg" class="img_responsive tile_imgs animated">')
        }
        if (w <= 6 && w > 3 || w == 11) {
            $('[tile="2"] .tile_cls').append('<img src="assets/images/content/tile_card_' + w + '.jpg" class="img_responsive tile_imgs animated">')
        }
        if (w <= 9 && w > 6 || w == 12) {
            $('[tile="3"] .tile_cls').append('<img src="assets/images/content/tile_card_' + w + '.jpg" class="img_responsive tile_imgs animated">')
        }
    }
})
    