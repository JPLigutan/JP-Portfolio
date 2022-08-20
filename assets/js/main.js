$(window).on("load",function(){var l=$("#header_title"),i="{Hi!} {I'm JP.}";$(".section_cls .container_cust"),function(){var t=0;function e(){l.addClass("active"),t<i.length&&(document.getElementById("header_title").innerHTML+=i.charAt(t),t++,setTimeout(e,200))}l.empty(),setTimeout(function(){e()},1200);var s=[],o=0;function a(){o<s.length&&($("#"+s[o]).addClass("fadeInUp"),o++,setTimeout(a,1e3))}$(".sub_header").each(function(){s.push($(this).attr("id"))}),o=0,setTimeout(function(){a()},4300),$(".sub_header").removeClass("active")}(),$("html, body").animate({scrollTop:0},10),$(".li_cls").each(function(){$(this).removeClass("active"),-1<$(this).attr("data-target").indexOf("section_1")&&$(this).addClass("active")}),$(".preset_cls").hover(function(){$(".preset_cls").addClass("active")}),$(".preset_cls").mouseout(function(){$(".preset_cls").removeClass("active")}),$(".li_cls").on("click",function(t){var e=$(this).attr("data-target");$(".li_cls").removeClass("active"),$(this).addClass("active"),$("html, body").animate({scrollTop:$("#"+e).offset().top},500)}),$(".scroll_down img").on("click",function(){$(".hero-zoomable-grid").removeClass("active"),$("body").removeClass("no_scroll")}),$(document).on("scroll",function(){var a;a=$(window).height(),$(".section_cls").each(function(){var t=$(this),e=$("html").scrollTop()+a/2>t.offset().top,s=$("html").scrollTop()>t.offset().top+t.height(),o=$("html").scrollTop()+a<=t.offset().top;e&&(t.find(".animated_trg").removeClass("fadeOutDown").addClass("fadeInUp"),$(".li_cls").removeClass("active"),$('.li_cls[data-target="'+t.attr("id")+'"]').addClass("active"),"section_2"===t.attr("id")&&($(".preset_cls").removeClass("pre"),$("body").removeClass("no_scroll"),$(".hero-zoomable-grid").removeClass("active"))),(s||o)&&(t.find(".animated_trg").removeClass("fadeInUp").addClass("fadeOutDown"),"section_2"===t.attr("id")&&$(".preset_cls").addClass("pre"))}),$(".parallax_scroll").each(function(){var t=$(this).closest(".section_cls");$("html").scrollTop()>=t.offset().top-a/2?(t=Math.min(Math.max($("html").scrollTop()/t.offset().top)),$(this).css("--parallax-scroll",t)):$(this).removeAttr("--parallax-scroll")}),$(".card-wrap").each(function(){var t=$("html").scrollTop()+.85*a>$(this).offset().top,e=$("html").scrollTop()>$(this).offset().top+$(this).height(),s=$("html").scrollTop()+.85*a<=$(this).offset().top;t&&$(this).removeClass("fadeOutDown").addClass("fadeInUp"),(e||s)&&$(this).removeClass("fadeInUp").addClass("fadeOutDown")})}),$(document).bind("mousewheel keydown",function(t){0<t.originalEvent.wheelDelta/120&&$("html").scrollTop()<=0?($("body").addClass("no_scroll"),$(".hero-zoomable-grid").addClass("active"),$("#scroll_down_text").css("opacity","0")):($("body").removeClass("no_scroll"),$(".hero-zoomable-grid").removeClass("active"),$("#scroll_down_text").css("opacity","1"))})});for(var x=12,i=0;i<x;i++){var w=i+1,u='<card data-image="./assets/images/content/tile_card_'+w+'.jpg"><h1 slot="header">Lorem Ipsum</h1><p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></card>';$("#app").append(u)}
Vue.config.devtools = true;
Vue.component('card', {
    template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
    mounted() {
        this.width = this.$refs.card.offsetWidth;
        this.height = this.$refs.card.offsetHeight;
    },
    props: ['dataImage'],
    data: ()=>({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null
    }),

    computed: {
        mousePX() {
            return this.mouseX / this.width;
        },
        mousePY() {
            return this.mouseY / this.height;
        },
        cardStyle() {
            const rX = this.mousePX * 30;
            const rY = this.mousePY * -30;
            return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
            };

        },
        cardBgTransform() {
            const tX = this.mousePX * -40;
            const tY = this.mousePY * -40;
            return {
                transform: `translateX(${tX}px) translateY(${tY}px)`
            };

        },
        cardBgImage() {
            return {
                backgroundImage: `url(${this.dataImage})`
            };

        }
    },

    methods: {
        handleMouseMove(e) {
            this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
            this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(()=>{
                this.mouseX = 0;
                this.mouseY = 0;
            }
            , 100);
        }
    }
});

const app = new Vue({
    el: '#app'
});
$(".card-wrap").addClass("animated");

$('.card-wrap').draggable({
    stack: '.card-wrap',
    revert: true
})
