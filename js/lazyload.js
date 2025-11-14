// Load item động Thêm class ẩn ban đầu
const elements = document.querySelectorAll('body > *');
elements.forEach(el => {
  el.classList.add('hidden');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15 // xuất hiện 15% là bắt đầu hiệu ứng
});

elements.forEach(el => observer.observe(el));