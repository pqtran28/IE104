
const popupClose = document.querySelector('.close-icon');
const address_wrapper = document.querySelector('.address-popup-wrapper');
const selectBox = document.querySelector('.select-box');
const mainOpt = selectBox.querySelector('.select-box__options > .select-box__opt');
const optBox = document.querySelector('.select-box__options');
const hiddenOptions = selectBox.querySelector('.hidden-options');
const optionItems = hiddenOptions.querySelectorAll('.select-box__opt');
const editLink_address = document.querySelector('#address_edit');
const overlay = document.querySelector('.overlay');

editLink_address.addEventListener('click',() => {
    address_wrapper.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'block';
});

popupClose.addEventListener('click', () => {
    address_wrapper.style.display = 'none';
    document.body.style.overflow = 'unset';
    overlay.style.display = 'none';
});

// Khi bấm vào ô chính => toggle hiện/ẩn hidden-options
mainOpt.addEventListener('click', () => {
  hiddenOptions.style.display = 'block'; // show là class để hiển thị
  optBox.classList.add('rm-border');
  optBox.classList.remove('add-border');
});

// Khi bấm vào 1 option trong hidden-options
optionItems.forEach(opt => {
  opt.addEventListener('click', () => {
    mainOpt.textContent = opt.textContent; // gán giá trị đã chọn
    hiddenOptions.style.display = 'none'; // ẩn lại
    optBox.classList.add('add-border');
    optBox.classList.remove('rm-border');
    optBox.classList.remove('add-border');
  });
});