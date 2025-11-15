// Đăng nhập
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const userBtn = document.querySelector('.login-signin');
const notifyBtn = document.querySelector(".notifyBtn");
const cartBtn = document.querySelector(".cartBtn");
const navUser = document.querySelector('.navbar-username');
const userBtnAll = document.querySelector('.navbar__right button');
const userMobile = document.querySelectorAll('.login-mobile')

// Nếu đã đăng nhập
if (currentUser) {
  navUser.textContent = currentUser.username;
  userBtn.href = '../accounts/account-setting.html';
  userBtnAll.addEventListener('click', () => {
  window.location.href = "../accounts/account-setting.html";
  });
}

else {
  userBtnAll.addEventListener('click', () => {
  window.location.href = "../accounts/account-login.html";
  });
}

userMobile.forEach(element => {
  element.addEventListener('click', () => {
    if(currentUser) {
      window.location.href = "../accounts/account-setting.html";
    }
    else {
      window.location.href = "../accounts/account-login.html";
    }
  })
});

// Xử lý click vào giỏ hàng
cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentUser) {
    cartBtn.href = "#";
  } else {
    cartBtn.href = "../accounts/account-login.html";
    console.log("hello");
    window.location.href = "../accounts/account-login.html";
  }
});

// Xử lý click vào thông báo
notifyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!currentUser) {
    window.location.href = "../accounts/account-login.html";
  }
});


const texts = document.querySelectorAll('.navbar__banner--promotion-text a');
let indexBanner = 0;

// chạy banner đầu trang  
function showNextText() {
  texts[indexBanner].classList.remove('active');
  indexBanner = (indexBanner + 1) % texts.length;
  texts[indexBanner].classList.add('active');   
}

texts[indexBanner ].classList.add('active');
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

let noScroll = false;
let inMenu = false;

const menu_toggle = document.querySelector('.menu-toggle');
const navbar_mobile_top = document.querySelector('.navbar-mobile__top');
const navbar_dropdownlist = document.querySelector('.navbar-mobile__menu');
const menu_close = document.querySelector('.menu-close');

menu_toggle.addEventListener('click', () => {
  navbar_dropdownlist.classList.toggle('menu-toggle-active');
  if (!noScroll) {
      document.body.classList.add('no-scroll');
      noScroll = true;
    }
  inMenu = true;
  if (inMenu && currentUser) {
  let login_out_menu = document.querySelector('#login_out_menu');
  if (login_out_menu) {
    login_out_menu.textContent = 'Đăng xuất';
    login_out_menu.href = '../homepage/index.html';
    login_out_menu.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
    })
  }
}
});

menu_close.addEventListener('click', () => {
  navbar_dropdownlist.classList.toggle('menu-toggle-active');
  if (noScroll) {
    document.body.classList.remove('no-scroll');
    noScroll = false;
  }
  inMenu = false;
})

// Phần tử desktop
const noti = document.querySelector('.notifyBtn');
// Phần tử mobile (có thể nhiều)
const noti_mobile = document.querySelectorAll('.navbar-mobile__icons > img:last-of-type');
// Tất cả popup
const noti_popup = document.querySelectorAll('.notification-popup');

// lưu trạng thái
let isOpen = false;

// --- Desktop ---
if (noti) {
  noti.addEventListener('click', (e) => {
    e.stopPropagation(); // tránh lan ra ngoài
    if (!currentUser) {
      window.location.href = "../accounts/account-login.html";
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
      window.location.href = "../accounts/account-login.html";
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

// giỏ hàng mobile
const mobileCart = document.querySelectorAll('.cart-mobile-navbar');

mobileCart.forEach(element => {
  element.addEventListener('click', () => {
    if(!currentUser) {
    window.location.href = '../accounts/account-login.html';
  }
  else {
    window.location.href = '../cart/shopping_cart.html';
  }
  });
});

// tìm kiếm
const mobileSearchBtn = document.querySelectorAll('.search-icons-mobile');
const searchMobile = document.querySelector('.navbar-mobile__search');
const closeSearch = document.querySelector('.navbar-mobile__search .close-icon');

mobileSearchBtn.forEach(searchBtn => {
  searchBtn.addEventListener('click', () => {
    searchMobile.classList.remove('hidden');
    searchMobile.classList.add('active');
    if (!noScroll) {
      document.body.classList.add('no-scroll');
      noScroll = true;
    }
  })
});

closeSearch.addEventListener('click', () => {
  searchMobile.classList.remove('active');
  searchMobile.classList.add('hidden');
  if (noScroll && !inMenu) {
      document.body.classList.remove('no-scroll');
      noScroll = false;
    }
})

// HÀM TÌM KIẾM

function initSearchFeature(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  const input = container.querySelector('input');
  const closeBtn = container.querySelector('.close-icon');
  const searchBtn = container.querySelector('.search-icon'); // #search-mb hoặc #search-dt
  const outputBox = container.querySelector('.search-results');
  const noResults = container.querySelector('.no-results');
  const inputCmd = container.querySelector('.input-keyword');

  // --- Giả lập dữ liệu tìm kiếm ---
  const data = [
    'Niacinamide Zinc 10%',
    'Kem chống nắng nâng tông',
    'UV defender SPF50+ PA++++'
  ];

  // --- Khi nhập từ khóa ---
  input.addEventListener('input', () => {
    const keyword = input.value.trim().toLowerCase();

    // Khi ô input trống
    if (keyword === '') {
      inputCmd.style.display = 'block';      // hiện gợi ý nhập
      noResults.style.display = 'none';      // ẩn thông báo không kết quả
      outputBox.querySelectorAll(':scope > p')?.forEach(p => p.remove());
      return;
    }

    // Khi đang nhập
    inputCmd.style.display = 'none';

    // Lọc dữ liệu
    const filtered = data.filter(item =>
      item.toLowerCase().includes(keyword)
    );

    // Nếu không có kết quả
    if (filtered.length === 0) {
      outputBox.querySelectorAll(':scope > p')?.forEach(p => p.remove());
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
      renderResults(filtered);
    }
  });

  closeBtn?.addEventListener('click', () => {
    input.value = '';
    inputCmd.style.display = 'block';
    noResults.style.display = 'none';
    outputBox.querySelectorAll(':scope > p')?.forEach(p => p.remove());
  });

  // --- render danh sách kết quả ---
  function renderResults(results) {

  outputBox.querySelectorAll(':scope > p').forEach(p => p.remove());

  const existing = new Set(
    Array.from(outputBox.querySelectorAll(':scope > p')).map(p => p.textContent)
  );

  results.forEach(item => {
    if (!existing.has(item)) {
      const p = document.createElement('p');
      p.textContent = item;
      outputBox.insertBefore(p, outputBox.firstChild);
      existing.add(item);
    }
  });
}
  inputCmd.style.display = 'block';
  noResults.style.display = 'none';
}


// cho mobile
initSearchFeature('.navbar-mobile__search');

// cho desktop
const desktopSearch = document.querySelector('.navbar__search');

let openSearch = false;

desktopSearch.addEventListener('click',(e) => {
  if(!openSearch) {
  openSearch = true;
  desktopSearch.querySelector('.search-results').style.display = 'block';
  initSearchFeature('.navbar__search');
  e.stopPropagation(); // tránh click vào desktopSearch bị document click xử lý
  }
})

// Click ra ngoài
document.addEventListener('click', (e) => {
  if (openSearch && !desktopSearch.contains(e.target)) {
    desktopSearch.querySelector('.search-results').style.display = 'none';
    openSearch = false;
  }
});

const navbarLogo = document.querySelector('.navbar__logo');
const navbarbottomLogo = document.querySelector('.navbar__bottom--logo');

navbarLogo.addEventListener('click', () => {
  window.location.href = '../homepage/index.html';
})

navbarbottomLogo.addEventListener('click', () => {
  window.location.href = '../homepage/index.html';
})

