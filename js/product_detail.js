document.addEventListener('DOMContentLoaded', () => {
    // Thêm sản phẩm yêu thích
    const wishlistIcon = document.getElementById('wishlistIcon');

    if (wishlistIcon) {
        wishlistIcon.parentElement.addEventListener('click', function() {
            const currentSrc = wishlistIcon.getAttribute('src');
        
            const emptyHeart = '../cart/cart-imgs/heart.svg';
            const filledHeart = '../cart/cart-imgs/heart-full.svg';

            if (currentSrc === emptyHeart) {
                wishlistIcon.setAttribute('src', filledHeart);
                wishlistIcon.setAttribute('alt', 'Remove from wishlist');
                console.log('Added to wishlist');
            } else {
                wishlistIcon.setAttribute('src', emptyHeart);
                wishlistIcon.setAttribute('alt', 'Add to wishlist')
                wishlistIcon.classList.remove(FULL_ICON_CLASS);
                console.log('Removed from wishlist');
            }
        });
    }

    // Tính giá phù hợp với dung tích
    const formatPrice = (price) => price.toLocaleString('vi-VN') + ' VND';
    
    const parsePrice = (priceText) => parseInt(priceText.replace(/\D/g, ''), 10);

    const sizeButtons = document.querySelectorAll('.size-btn');
    const newPrice = document.getElementById('productNewPrice');
    const oldPrice = document.getElementById('productOldPrice');

    const NewPrice = parsePrice(newPrice.textContent);
    const OldPrice = parsePrice(oldPrice.textContent);

    const discount = OldPrice - NewPrice;
    
    const priceMap = {
        '100ml': { new: NewPrice, old: OldPrice },
        '150ml': { 
            new: NewPrice + 50000,
            old: NewPrice + 50000 + discount
        }
    };

    // chọn size và giá tương ứng
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.getAttribute('data-size');
            const prices = priceMap[size];
            
            sizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (prices) {
                newPrice.textContent = formatPrice(prices.new);
                oldPrice.textContent = formatPrice(prices.old);
            }
        });
    });

    // Tăng/giảm số lượng sản phẩm
    const qtyInput = document.querySelector('.quantity span');
    const minusBtn = document.querySelector('.qty-btn:first-child');
    const plusBtn = document.querySelector('.qty-btn:last-child');

    if (qtyInput && minusBtn && plusBtn) {
        function updateQuantityState() {
            let currentQty = parseInt(qtyInput.textContent);
            minusBtn.classList.toggle('disabled-qty', currentQty <= 1);
        }

        updateQuantityState();

        plusBtn.addEventListener('click', () => {
            let currentQty = parseInt(qtyInput.textContent);
            qtyInput.textContent = currentQty + 1;
            updateQuantityState();
        });

        minusBtn.addEventListener('click', () => {
            let currentQty = parseInt(qtyInput.textContent);
            if (currentQty > 1) {
                qtyInput.textContent = currentQty - 1;
                updateQuantityState();
            }
        });
    }

    // Mở modal thành phần
    const expandBtn = document.getElementById('expandIngredients');
    const closeBtn = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('ingredientsOverlay');

    if (expandBtn && modalOverlay) {
        expandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    }

    const closeModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Ẩn/hiện chi tiết tổng quan
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.closest('.accordion-item');
            if (accordionItem) {
                accordionItem.classList.toggle('open');
            }
        });
    });

    // slider
    const thumbnails = document.querySelectorAll('.gallery__thumbnails img');
    const mainImage = document.querySelector('.gallery__main img');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const newImageSrc = thumb.getAttribute('src');
            const newImageAlt = thumb.getAttribute('alt');
            mainImage.setAttribute('src', newImageSrc);
            mainImage.setAttribute('alt', newImageAlt);
        });
    });
});
