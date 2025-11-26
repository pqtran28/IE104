// Thêm sản phẩm yêu thích
const wishlistIcon = document.getElementById('wishlistIcon');

if (wishlistIcon) {
    wishlistIcon.parentElement.addEventListener('click', function() {
        const currentSrc = wishlistIcon.getAttribute('src');
        
        const emptyHeart = '../cart/cart-imgs/heart.svg';
        const filledHeart = '../cart/cart-imgs/heart_full.svg';

        if (currentSrc === emptyHeart) {
            wishlistIcon.setAttribute('src', filledHeart);
            wishlistIcon.setAttribute('alt', 'Remove from wishlist');
            console.log('Added to wishlist');
        } else {
            wishlistIcon.setAttribute('src', emptyHeart);
            wishlistIcon.setAttribute('alt', 'Add to wishlist');
            console.log('Removed from wishlist');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Chọn size
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
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
