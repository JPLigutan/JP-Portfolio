$(".li_cls").on("click",function(){
    $('.li_cls').removeClass("active");
    $(this).addClass("active");
})
    
$(window).on("load", function(){
var t=$("#sub_1"),t2=$("#sub_2"),t3=$("#sub_3");
$(".section_cls").addClass("fadeInDown")
function animate_type(){
    var i=0,tx=t.text();function typeWriter(){t.addClass("active"),i<tx.length&&(document.getElementById("sub_1").innerHTML+=tx.charAt(i),i++,setTimeout(typeWriter,200))}t.empty(),setTimeout(function(){typeWriter()},1200);var i2=0,t2x=t2.text();function typeWriter2(){t2.addClass("active"),i2<t2x.length&&(document.getElementById("sub_2").innerHTML+=t2x.charAt(i2),i2++,setTimeout(typeWriter2,200))}t2.empty(),setTimeout(function(){typeWriter2()},3e3);var i3=0,t3x=t3.text();function typeWriter3(){t3.addClass("active"),i3<t3x.length&&(document.getElementById("sub_3").innerHTML+=t3x.charAt(i3),i3++,setTimeout(typeWriter3,200))}$("#sub_3").empty(),setTimeout(function(){typeWriter3()},4800)
    $("#hero_imgs .img_res").each(function(e){
        var k = $(this);
        s = 500 + (e * 750) 
        setTimeout(function(){ 
            k.addClass("slideInDown");
        }, s);
    })
    $("#hero_imgs .img_res").removeClass("slideInDown");
    $(".sub_header").removeClass("active");
}
animate_type();
setInterval(animate_type, 20000)

})
