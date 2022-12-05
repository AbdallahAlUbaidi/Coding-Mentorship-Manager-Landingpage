const menu_btn = document.getElementsByClassName('menu-btn')[0];
const vertical_menu = document.getElementsByClassName('vertical-nav')[0];
const close_menu = document.getElementsByClassName('close-menu')[0];
const menu_container = document.getElementsByClassName('container')[0]

menu_btn.addEventListener('click' , ()=>
{
    menu_btn.classList.add('menu-btn-open');
    vertical_menu.classList.add('vertical-nav-open');
    menu_container.classList.add('container-open')
})

close_menu.addEventListener('click' , ()=>
{
    vertical_menu.classList.remove('vertical-nav-open');
    menu_btn.classList.remove('menu-btn-open');
    menu_container.classList.remove('container-open')
})