// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 50) {
//             $(".header").addClass("active");
//         } else {
//             //remove the background property so it comes transparent again (defined in your css)
//            $(".header").removeClass("active");
//         }
//     });
// });


// window.onload=function(){
// const toggleBtn = document.querySelector('.hamburger');
// const menu = document.querySelector(".nav_inner-menu ul");
// toggleBtn.addEventListener("click", () => { 
//     // alert('안녕하세요');
//     menu.classList.toggle("active");
// });
// }

// 햄버거 메뉴 버튼 JS 스크립트
window.onload=function(){
const menu_btn = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile_menu');
const bg = document.querySelector('.overlay');

menu_btn.addEventListener('click',function(){

    menu_btn.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    bg.toggle('is-active');
});
}

const appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver
    (function(
        entries,
        appearOnScroll
    ) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// });



const images = document.querySelectorAll("video")



// Jquery 타이틀 터치시 숨김
//   $(document).ready(function(){
//       $(".title_des").click(function(){
//       $(this).hide();
//       });
//   });

// Jquery
// $(document).ready(function(){
//     $(".title_des").click(function(){
//     $(this).hide();
//     });
// });


// $(function() {
//     $('.lazy').Lazy();
// });

// $('.lazy').Lazy({ 
//     // your configuration goes here 
//     thresold : 100, 
//     placeholder : 'spinning-loading.gif', 
//     effect: 'fadeIn', 
//     onError: function(element) { 
//         console.log('error loading ' + element.data('src')); 
//     } 
// });

// $(document).ready(function(){
//     $(".title_des").hover(function(){
//     $(this).animate({height:"+=1000px"});
//     });
// });

