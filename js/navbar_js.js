const texts = document.querySelectorAll('.navbar__banner--promotion-text a');
let index = 0;

// chạy banner đầu trang
function showNextText() {
    texts[index].classList.remove('active');
    index = (index + 1) % texts.length;
    texts[index].classList.add('active');
}

texts[index].classList.add('active');
setInterval(showNextText, 3000);

// Hover vào hiện list spham:
// chọn tất cả các phần tử có class là navbar__menu__content và có class tg ứng, nếu hover vào thì các phần tử có class tương tự phần tử đc hover sẽ hiện

const menus = document.querySelectorAll('.navbar__menu__content.deals, .navbar__menu__content.skincare, .navbar__menu__content.hairbody');
const wrapper = document.querySelector('.content__list-wrapper');
const lists = document.querySelectorAll('.navbar__menu__content--list');
let isOverList = false;

menus.forEach(menu => {
    const type = menu.classList.contains('deals') ? 'deals' :
        menu.classList.contains('skincare') ? 'skincare' : 'hairbody';
    const list = document.querySelector(`.navbar__menu__content--list.${type}`);

    // Hover vào menu hiện list tương ứng
    menu.addEventListener('mouseenter', () => {
        wrapper.style.display = 'block';

        // Ẩn tất cả list khác
        lists.forEach(l => l.style.display = 'none');

        // Hiện list tương ứng
        list.style.display = 'flex';
        list.style.gap = '30px';
    });

    // Khi chuột rời khỏi menu, nếu không hover vào list thì ẩn
    menu.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!wrapper.matches(':hover')) {
                wrapper.style.display = 'none';
                list.style.display = 'none';
            }
        }, 100);
    });

    // Khi rời khỏi list thì ẩn
    wrapper.addEventListener('mouseleave', () => {
        wrapper.style.display = 'none';
        list.style.display = 'none';
    });
});

const menu_toggle = document.querySelector('.menu-toggle');
const navbar_mobile_top = document.querySelector('.navbar-mobile__top');
const navbar_dropdownlist = document.querySelector('.navbar-mobile__menu');
const menu_close = document.querySelector('.menu-close');

menu_toggle.addEventListener('click', () => {
    navbar_dropdownlist.style.display = 'block';
    document.body.classList.toggle('no-scroll');
});

menu_close.addEventListener('click', () => {
    navbar_dropdownlist.style.display = 'none';
    document.body.classList.toggle('no-scroll');
})


