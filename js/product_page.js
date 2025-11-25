// mở/đóng sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

//chỉ hiện nút show-more đầu tiên, còn các nút sau ẩn
const productSections = document.querySelectorAll('.product-section');
productSections.forEach(element => {
    const showmores = element.querySelectorAll('.show-more');
    showmores.forEach(showmore => {
        showmore.style.display = 'none';
    });
    const firstShowmore = element.querySelectorAll('.product-section .show-more:first-of-type');
    firstShowmore.forEach(first => {
        first.style.display = 'block';
    });
});

// showmore
const showmoreBtns = document.querySelectorAll('.show-more');

showmoreBtns.forEach(element => {
    element.addEventListener('click', () => {
        const wrapperProduct = element.nextElementSibling;
        element.style.display = 'none';
        wrapperProduct.style.display = 'grid';
        if(wrapperProduct.nextElementSibling && wrapperProduct.nextElementSibling.classList.contains('show-more')) {
            wrapperProduct.nextElementSibling.style.display = 'block';
        }
    });
});

// product card, lấy từ account-fav
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

// price theo từng dung tích
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

document.addEventListener("DOMContentLoaded", function () {
    //filter
    const filterBtn = document.getElementById("filter-btn");
    const filterMenu = document.querySelector(".filter-menu");
    const filterButton = document.querySelectorAll(".filter-button button");
    filterBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        filterMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
        if (!filterMenu.contains(e.target) && !filterBtn.contains(e.target)) {
            filterMenu.classList.remove("active");
        }
    });

    filterButton.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filterMenu.classList.remove("active");
        });
    });
});

//điều hướng đến trang chi tiết sản phẩm khi nhấp vào sản phẩm
const productLinks = document.querySelectorAll('.product-item img, .product-item .product-title');

productLinks.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '../cart/chitietsp.html';
    })
});
