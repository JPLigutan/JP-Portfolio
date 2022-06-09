$(".li_cls").on("click",function(){
    $('.li_cls').removeClass("active");
    $(this).addClass("active");
})

var i = 0;
var t = $("#sub_1");
var tx = t.text();
t.empty()
setTimeout(function(){ typeWriter() }, 1200);
function typeWriter() {
  t.addClass("active")
  if (i < tx.length) {
    document.getElementById("sub_1").innerHTML += tx.charAt(i);
    i++;
    setTimeout(typeWriter, 200);
  }
}

var i2 = 0;
var t2 = $("#sub_2");
var t2x = t2.text();
t2.empty()
function typeWriter2() {
  t2.addClass("active")
    if (i2 < t2x.length) {
      document.getElementById("sub_2").innerHTML += t2x.charAt(i2);
      i2++;
      setTimeout(typeWriter2, 200);
    }
  }
  setTimeout(function(){ typeWriter2() }, 3000);

  
  var i3 = 0;
  var t3 = $("#sub_3");
  var t3x = t3.text();
  $("#sub_3").empty()
  function typeWriter3() {
  t3.addClass("active")
      if (i3 < t3x.length) {
        document.getElementById("sub_3").innerHTML += t3x.charAt(i3);
        i3++;
        setTimeout(typeWriter3, 200);
      }
    }
    setTimeout(function(){ typeWriter3() }, 4800);
  
    
$(window).on("load", function(){
    $("#hero_imgs .img_res").each(function(e){
        var k = $(this);
        s = 500 + (e * 1000) 
        setTimeout(function(){ 
            k.addClass("slideInDown");
        }, s);
    })

    $(".sub_header").each(function(e){
        var k = $(this);
        s = 500 + (e * 1000) 
        setTimeout(function(){ 
            k.addClass("slideInDown");
        }, s);
    })
})