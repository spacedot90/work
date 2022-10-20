

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
