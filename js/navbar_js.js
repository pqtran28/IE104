// Đăng nhập
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const userBtn = document.querySelector('.login-signin');
const notifyBtn = document.querySelector(".notifyBtn");
const cartBtn = document.querySelector(".cartBtn");

// Nếu đã đăng nhập
if (currentUser) {
  userBtn.textContent = currentUser.username;
}

// Xử lý click vào giỏ hàng
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentUser) {
    cartBtn.href = "#";
  } else {
    cartBtn.href = "/accounts/account-login.html";
    console.log("hello");
    window.location.href = "/accounts/account-login.html";
  }
});

// Xử lý click vào thông báo
// notifyBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (!currentUser) {
//     window.location.href = "/accounts/account-login.html";
//   }
// });

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
    navbar_dropdownlist.classList.toggle('menu-toggle-active');
    document.body.classList.toggle('no-scroll');
});

menu_close.addEventListener('click', () => {
    navbar_dropdownlist.classList.toggle('menu-toggle-active');
    document.body.classList.toggle('no-scroll');
})

// Phần tử desktop
const noti = document.querySelector('.navbar__right > a:last-of-type');
// Phần tử mobile (có thể nhiều)
const noti_mobile = document.querySelectorAll('.navbar-mobile__icons > a:last-of-type');
// Tất cả popup
const noti_popup = document.querySelectorAll('.notification-popup');

// lưu trạng thái
let isOpen = false;

// --- Desktop ---
if (noti) {
  noti.addEventListener('click', (e) => {
    e.stopPropagation(); // tránh lan ra ngoài
    if (!currentUser) {
      // chưa đăng nhập thì không mở popup, chuyển về trang đăng nhập
      window.location.href = "/accounts/account-login.html";
    }
    else {
      isOpen = !isOpen;
    noti_popup.forEach(p => p.style.display = isOpen ? 'block' : 'none');
    }
  });
}

// --- Mobile ---
noti_mobile.forEach(n => {
  n.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentUser) {
      // chưa đăng nhập thì không mở popup, chuyển về trang đăng nhập
      window.location.href = "/accounts/account-login.html";
    }
    else {
      isOpen = !isOpen;
      noti_popup.forEach(p => p.style.display = isOpen ? 'block' : 'none');
    }
  });
});

// --- Click ra ngoài ---
document.addEventListener('click', (e) => {
  if (
    !noti?.contains(e.target) &&
    !Array.from(noti_mobile).some(n => n.contains(e.target)) &&
    !Array.from(noti_popup).some(p => p.contains(e.target))
  ) {
    noti_popup.forEach(p => p.style.display = 'none');
    isOpen = false;
  }
});