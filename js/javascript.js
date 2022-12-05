const menu_btn = document.getElementsByClassName('menu-btn')[0];
const vertical_menu = document.getElementsByClassName('vertical-nav')[0];
const close_menu = document.getElementsByClassName('close-menu')[0];
const menu_container = document.getElementsByClassName('container')[0]

menu_btn.addEventListener('click' , ()=>
{
    menu_btn.style.display = "none";
    vertical_menu.style.display = 'flex';
    menu_container.classList.add('container-open')
})

close_menu.addEventListener('click' , ()=>
{
    menu_btn.style.display = "flex";
    vertical_menu.style.display = 'none';
    menu_container.classList.remove('container-open')
})