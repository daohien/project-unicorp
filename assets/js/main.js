function load() {
    let loading = document.querySelector(".loading");
    $(window).ready(()=>{
        loading.className += " hidden";
    })
}
load();

$(window).ready(function(){
    // loading
    
    // window.addEventListener("load", ()=>{
    //     let loading = document.querySelector(".loading");
    //     loading.className += " hidden";
    // })
    var check = "theFirst";
    $(".nav-bar").click(function(){
        if (check == "theFirst") {
            check = "theSecond";
            $(".nav-bar").addClass("active");
            $(".menu").addClass("active");
        } else if (check == "theSecond") {
            check = "theFirst";
            $(".nav-bar").removeClass("active");
            $(".menu").removeClass("active");
        }
    })
    // Header
    $(window).scroll(function(){
        var h = window.scrollY;
        if ( h > 100 ){
            $(".header").addClass("active").css("transition","all .3s ease")
        } else {
            $(".header").removeClass("active").css("transition","all .3s ease");
        }
    })
    // Accordion
    $(".item").click(function(event){
        var check = this.className;
        $(".item").removeClass("active");
        if (check == "item") {
            $(this).addClass("active")
        }
    })   
    // Animate
    new WOW().init();
    // Carousel
    $('#carousel-project').owlCarousel({
        dots: true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900: {
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    $('.carousel-service').owlCarousel({
        autoplay: true,
        dots: false,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900: {
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $('#carousel-service').owlCarousel({
        autoplay: true,
        dots: false,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900: {
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    $('#latest-carousel').owlCarousel({
        dots: true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            900: {
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});
//  Auto Slide
function autoSlide(){
    var slide = document.querySelectorAll(".style-01>.slide");
    var activeSlide = document.querySelector(".active.slide"); 
    if (slide && activeSlide) {
        for (var i = 0; i < slide.length; i++){
            slide[i].className = "slide";
        } 
        if(activeSlide.nextElementSibling == null){
            slide[0].classList.add("active");
        } else {
            activeSlide.nextElementSibling.className = "slide active";
        }
    }
}
var setTime = setInterval(autoSlide, 7000);
function getBounding() {
    var counter_style01 = document.querySelector(".counter.style-01");
    var counter_style02 = document.querySelector(".counter.style-02");
    var pie_chart = document.querySelector(".pie-chart");
    var number = document.querySelectorAll(".counter .value .number") 
    if (counter_style02) { 
        var number = document.querySelectorAll(".number");   
        number.forEach((item, idx, arr) => {
            var item_data = Number(item.dataset.number);
            window.addEventListener("scroll", function check() {
                var react = item.getBoundingClientRect();
                var t = react.top;
                var h = window.innerHeight;  
                if(t < h) {
                    var start = 0;
                    var set_Time = setInterval(()=>{
                        start += 5;
                        item.innerHTML = start;
                        if (start == item_data){  
                            clearInterval(set_Time);         
                        }                
                    }, 100)
                    window.removeEventListener("scroll",check);
                }  
            }) 
        })
    } else if (counter_style01){
        const numbers = document.querySelectorAll(".counter.style-01 .value .number");
        const speech = 10;
        var pie_chart = document.getElementById("pie-chart");
        var number_pie = document.querySelectorAll(".percent .number");
        window.addEventListener("scroll", function check() {
            numbers.forEach(counter => {
                let react = counter.getBoundingClientRect();
                let t = react.top;
                let h = window.innerHeight;	
                if(t < h) {
                    const updateCounter = () => {
                        const target = +counter.getAttribute('data-number');
                        const count = +counter.innerText;
                        const inc = target / speech;
                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCounter, 1000)
                        } else {
                            count.innerText = target;
                        }
                    } 
                    updateCounter()
                }
            })
            var react = pie_chart.getBoundingClientRect();
            var t = react.top;
            var h = innerHeight;
            if(t < h){
                number_pie.forEach(function(item, idx, arr){     
                    var data = Number(item.dataset.target); 
                    var start = 0 ;
                    var set_Time = setInterval(function(){
                        start += 5;
                        item.innerHTML = start + "%";
                        if ( start == data) {
                            clearInterval(set_Time);
                        }
                        item.style.background = "radial-gradient( circle closest-side, white 0%, white 80%, transparent 80%, transparent 90%, white 0),conic-gradient(#2980b9 0, #2980b9 "+ start +"%,  #f3f3f3 0%, #f3f3f3 100%)"
                    },100)
                    window.removeEventListener("scroll",check);
                })
            }
        })
    }
}
getBounding()

// detech viewport

// .is-in-view

function thumbnail(){
    var thumbnailTop = document.querySelector(".thumbnail-top");
    if(thumbnailTop){ 
        window.addEventListener("scroll", ()=>{
            var y = window.scrollY;
            thumbnailTop.style.transform = "translate3d(0, "+ 1 + y/100 +"px, 0)"      
        })
    } 
}
thumbnail()