const favBox = document.querySelectorAll('.fav-box');
const favArr = document.querySelectorAll('.fav-box svg:nth-of-type(2)');

favBox.forEach(box => {
    const fav = box.querySelector('svg:nth-of-type(2)');
    const notfav = box.querySelector('svg:first-of-type');

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

  // Lấy giá gốc từ text ban đầu
  const basePrice = parseInt(priceEl.textContent.replace(/\D/g, ''));

  ml1.addEventListener('click', () => {
    priceEl.textContent = basePrice.toLocaleString('vi-VN') + 'vnđ';
    ml2.style.fontWeight = 'normal';
    ml1.style.fontWeight = 'bold';
  });

  ml2.addEventListener('click', () => {
    const newPrice = basePrice + 50000;
    priceEl.textContent = newPrice.toLocaleString('vi-VN') + 'vnđ';
    ml2.style.fontWeight = 'bold';
    ml1.style.fontWeight = 'normal';
  });
});