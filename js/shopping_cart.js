document.addEventListener('DOMContentLoaded', () => {
    // Lấy giá từ text ban đầu
    const parsePrice = (priceText) => parseInt(priceText.replace(/\D/g, ''), 10);
    const formatPrice = (price) => price.toLocaleString('vi-VN') + ' VND';
    // Lấy số lượng từ text
    const getQuantity = (itemEl) => {
    const qtyTextEl = itemEl.querySelector('.cart-item-details p:first-child');
    const matches = qtyTextEl?.textContent.match(/(\d+)$/);
    return matches ? parseInt(matches[1], 10) : 1;
    };

    const cartItems = document.querySelectorAll('.cart-item');
    const totalDisplay = document.getElementById('cartTotalDisplay');
    
    // Tính tổng tiền hàng
    const updateCartTotal = () => {
        let total = 0;

        cartItems.forEach(item => {
            const priceEl = item.querySelector('.item-price');
            const select = item.querySelector('.size-select');
            
            if (priceEl && select) {
                const selectedOption = select.options[select.selectedIndex];
                const basePrice = parsePrice(selectedOption.getAttribute('data-price-base'));
                
                const qty = getQuantity(item); 
                const itemTotal = basePrice * qty;
                
                priceEl.textContent = `Thành tiền: ${formatPrice(itemTotal)}`;
                
                total += itemTotal;
            }
        });
        
        if (totalDisplay) {
            totalDisplay.textContent = formatPrice(total);
        }
    };
    
    cartItems.forEach(item => {
        const select = item.querySelector('.size-select');
        
        if (select) {
            select.addEventListener('change', updateCartTotal);
        }
    });

    updateCartTotal(); 

});
