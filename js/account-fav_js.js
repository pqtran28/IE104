const favBox = document.querySelectorAll('.fav-box');
const favArr = document.querySelectorAll('.fav-box svg:nth-of-type(2)');

// Ẩn tất cả icon "đã thích" lúc đầu
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