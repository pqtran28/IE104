const overlay = document.querySelector('.overlay');
const body = document.body;

// Popup địa chỉ
const addressWrapper = document.querySelector('.address-popup-wrapper');
const addressClose = addressWrapper.querySelector('.close-icon');
const editLinkAddress = document.querySelector('#address_edit');

// Popup thanh toán
const paymentWrapper = document.querySelector('.payment-popup-wrapper');
const paymentClose = paymentWrapper.querySelector('.close-icon');
const editLinkPayment = document.querySelector('#payment_edit');

// --- Hàm mở & đóng pop-up ---
function openPopup(popup) {
  popup.style.display = 'flex';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
}
function closePopup(popup) {
  popup.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflow = 'unset';
}

// --- Sự kiện mở pop-up ---
editLinkAddress?.addEventListener('click', e => {
  e.preventDefault();
  openPopup(addressWrapper);
});
editLinkPayment?.addEventListener('click', e => {
  e.preventDefault();
  openPopup(paymentWrapper);
});

// --- Sự kiện đóng pop-up ---
addressClose.addEventListener('click', () => closePopup(addressWrapper));
paymentClose.addEventListener('click', () => closePopup(paymentWrapper));
overlay.addEventListener('click', () => {
  closePopup(addressWrapper);
  closePopup(paymentWrapper);
});

// --- Dropdown select-box chung ---
document.querySelectorAll('.select-box').forEach(selectBox => {
  const optBox = selectBox.querySelector('.select-box__options');
  const mainOpt = optBox?.querySelector('.select-box__opt');
  const hiddenOptions = optBox?.querySelector('.hidden-options');
  const optionItems = hiddenOptions?.querySelectorAll('.select-box__opt');

  if (!mainOpt || !hiddenOptions) return;

  mainOpt.addEventListener('click', e => {
    e.stopPropagation();
    const isVisible = hiddenOptions.style.display === 'block';
    document.querySelectorAll('.hidden-options').forEach(opt => opt.style.display = 'none');
    hiddenOptions.style.display = isVisible ? 'none' : 'block';
  });

  optionItems.forEach(opt => {
    opt.addEventListener('click', () => {
      mainOpt.textContent = opt.textContent;
      hiddenOptions.style.display = 'none';
      selectBox.dataset.value = opt.textContent;
      // Gọi cập nhật phụ thuộc nếu là select phương thức
      if (selectBox.classList.contains('payment-method-box')) {
        updateSubPaymentBox(opt.textContent);
      }
    });
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.hidden-options').forEach(opt => opt.style.display = 'none');
});

// --- Xử lý phụ thuộc cho phương thức thanh toán ---
function updateSubPaymentBox(selectedMethod) {
  const subBox = paymentWrapper.querySelector('.sub-payment-box');
  const mainOpt = subBox.querySelector('.select-box__options > .select-box__opt');
  const hiddenOptions = subBox.querySelector('.hidden-options');

  // Reset nội dung
  mainOpt.textContent = 'Chọn';
  hiddenOptions.innerHTML = ''; // xóa cũ

  // Tạo danh sách tùy chọn theo loại
  let opts = [];
  if (selectedMethod === 'Ví điện tử') {
    opts = ['Momo', 'ZaloPay'];
  } else if (selectedMethod === 'Ngân hàng' || selectedMethod === 'Thẻ') {
    opts = ['BIDV', 'MB'];
  } else {
    subBox.style.display = 'none';
    return;
  }

  // Hiển thị box và thêm option
  subBox.style.display = 'flex';
  opts.forEach(opt => {
    const div = document.createElement('div');
    div.classList.add('select-box__opt');
    div.textContent = opt;
    hiddenOptions.appendChild(div);
  });

  // Gán sự kiện click mới cho các option
  const optionItems = hiddenOptions.querySelectorAll('.select-box__opt');
  optionItems.forEach(opt => {
    opt.addEventListener('click', () => {
      mainOpt.textContent = opt.textContent;
      hiddenOptions.style.display = 'none';
    });
  });
}
