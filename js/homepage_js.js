// Sản phẩm yêu thích (nhấn vào sản phẩm)
const favBox = document.querySelectorAll('.fav-box');
const favArr = document.querySelectorAll('.fav-box svg:nth-of-type(2)');

favBox.forEach(box => {
    const fav = box.querySelector('svg:nth-of-type(2)');
    const notfav = box.querySelector('svg:first-of-type');

    // Ban đầu: hiển thị notfav, ẩn fav
    fav.classList.add('hidden');
    notfav.classList.remove('hidden');

    notfav.addEventListener('click', () => {
        notfav.classList.add('hidden');
        fav.classList.remove('hidden');
    });

    fav.addEventListener('click', () => {
        fav.classList.add('hidden');
        notfav.classList.remove('hidden');
    });
});

// price
document.querySelectorAll('.product-price').forEach(box => {
  const priceEl = box.querySelector('.price');
  const ml1 = box.querySelector('.ml1');
  const ml2 = box.querySelector('.ml2');

  ml1.style.fontWeight = 500;
  // Lấy giá gốc từ text ban đầu
  const basePrice = parseInt(priceEl.textContent.replace(/\D/g, ''));

  ml1.addEventListener('click', () => {
    priceEl.textContent = basePrice.toLocaleString('vi-VN') + 'vnđ';
    ml2.style.fontWeight = 'normal';
    ml1.style.fontWeight = 500;
  });

  ml2.addEventListener('click', () => {
    const newPrice = basePrice + 50000;
    priceEl.textContent = newPrice.toLocaleString('vi-VN') + 'vnđ';
    ml2.style.fontWeight = 500;
    ml1.style.fontWeight = 'normal';
  });
});

// slider sp
const track = document.querySelector('.fav-list-wrapper');
const items = document.querySelectorAll('.product-card');
const btnPrev = document.querySelector('.product-slider .prev');
const btnNext = document.querySelector('.product-slider .next');

let i = 0;
const itemsPerScreen = 4;
const gap = 20; // px
const maxIndex = items.length - itemsPerScreen;

function updateSlider() {
  const itemWidth = items[0].offsetWidth;
  console.log(itemWidth);
  const shift = i * (itemWidth + gap);
  track.style.transform = `translateX(-${shift}px)`;
}

// Next
btnNext.addEventListener('click', () => {
  if (i < maxIndex) {
    i++;
    updateSlider();
  }
});

// Prev
btnPrev.addEventListener('click', () => {
  if (i > 0) {
    i--;
    updateSlider();
  }
});

// carousel infinite beautiblog
const track_beautyblog = document.querySelector('.beauty-blog');
const cards = [...track_beautyblog.children];
for (const card of cards) {
  track_beautyblog.appendChild(card.cloneNode(true));
}
track_beautyblog.offsetWidth;
let pos = 0;
const speed = 1;

function animate() {
  pos += speed;
  const halfTrackWidth = track_beautyblog.scrollWidth / 2;
  if (pos >= halfTrackWidth) {
    pos = 0; // reset seamless
  }
  track_beautyblog.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animate);
}
animate();

const getStartedBtn = document.querySelector('.get-started');
if (!currentUser) {
  getStartedBtn.style.display = 'block';
  getStartedBtn?.addEventListener('click',() => {
  window.location.href = '../accounts/account-signin.html';
});
}
else {
  getStartedBtn.style.display = 'none';
}

const addToCartBtn = document.querySelectorAll('.product-item button');

addToCartBtn.forEach(element => {
  element.addEventListener('click', () => {
    if(!currentUser) {
    window.location.href = '../accounts/account-login.html';
  }
  });
});

// tầm nhìn
const itemValues = document.querySelectorAll('.container__right-item');
const mainImg = document.querySelector('#container__left-main-img');
const allDescriptions = document.querySelectorAll('.container__right-description p');

// --- HIỆN MẶC ĐỊNH "TẦM NHÌN" ---
allDescriptions.forEach(p => p.style.display = 'none');
const defaultDesc = document.querySelector('.vision');
if (defaultDesc) defaultDesc.style.display = 'block';

itemValues.forEach(item => {
  item.addEventListener('mouseenter', () => {

    // đổi ảnh
    const newImg = item.getAttribute("data-img");
    mainImg.classList.add("fade");
    setTimeout(() => {
      mainImg.src = newImg;
      mainImg.classList.remove("fade");
    }, 300);

    // ẩn toàn bộ mô tả
    allDescriptions.forEach(p => p.style.display = 'none');

    // hiện mô tả theo id
    const id = item.getAttribute("id");
    const description = document.querySelector(`.${id}`);
    if (description) {
      description.style.display = 'block';
    }
  });
});

const productLinks = document.querySelectorAll('.product-item img, .product-item .product-title');

productLinks?.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '../cart/chitietsp.html';
    })
});




