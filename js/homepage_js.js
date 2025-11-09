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