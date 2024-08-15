const menu=document.querySelector('.bx-menu');
const navLinks=document.querySelector('.nav-links');
console.log(navLinks);
console.log(menu);

menu.addEventListener('click',move);

function move(){
    menu.classList.toggle('bx-x')
    navLinks.classList.toggle('active');
}