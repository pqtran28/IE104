// sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

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

// sửa hết showmore
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

// sửa hết product card, lấy từ account-fav
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

//love_prod
function toggleFav(element) {
    const img = element.querySelector(".love-icon");
    const isactive = element.classList.toggle("active");
    if (isactive) {
        img.src = "../products/image_prod/heart_full.svg";
    }
    else {
        img.src = "../products/image_prod/heart.svg";
    }
}

// update_price_for_product_page
function updateprice(size) {
    const product = event.target.closest(".product");
    const small = product.querySelector(".small");
    const big = product.querySelector(".big");
    small.classList.remove("active");
    big.classList.remove("active");
    choosevolume(size)
    //change_price
    function choosevolume(element) {
        const price = product.querySelector(".price");
        if (element == "small") {
            price.textContent = "200.000 VND";
            small.classList.add("active");
        }
        else {
            price.textContent = "350.000 VND";
            big.classList.add("active");
        }
    }
}

// update_price_for_deal_page
function updateprice_deal(size) {
    const product = event.target.closest(".deal-product");
    const small = product.querySelector(".small");
    const big = product.querySelector(".big");
    const old_price = product.querySelector(".old-price");
    const new_price1 = product.querySelector(".sale-price1");
    const new_price2 = product.querySelector(".sale-price2");
    small.classList.remove("active");
    big.classList.remove("active");
    choosevolume(size)
    function choosevolume(element) {
        if (element == "small") {
            if (new_price1) {
                new_price1.textContent = "180.000 VND";
            }
            else {
                new_price2.textContent = "160.000 VND";
            }
            old_price.textContent = "200.000 VND";
            small.classList.add("active");
        }
        else {
            if (new_price1) {
                new_price1.textContent = "315.000 VND";
            }
            else {
                new_price2.textContent = "280.000 VND";
            }
            old_price.textContent = "350.000 VND";
            big.classList.add("active");
        }
    }
}

const productLinks = document.querySelectorAll('.product-card');

productLinks.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '../cart/chitietsp.html';
    })
});
