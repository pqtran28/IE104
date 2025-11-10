const form = document.getElementById("signin-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("mail");
const pwInput = document.querySelector('input[name="password"]');
const pwError = document.getElementById("pw");
const confirmInput = document.querySelector('input[name="confirm-password"]');
const confirmError = document.getElementById("notmatch-pw");
const signin_btn = document.querySelector('.register-btn');
const usernameInput = document.querySelector('input[name="username"]');

// Ẩn lỗi ban đầu

function hidden_error(emailError, pwError, confirmError) {
  emailError.style.display = "none";
  pwError.style.display = "none";
  confirmError.style.display = "none";
}

// Hàm check định dạng email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Hàm check mật khẩu đủ mạnh
function validatePassword(pw) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(pw);
}

// Khi người dùng nhấn submit
signin_btn.addEventListener("click", function (e) {
  e.preventDefault();

  let valid = true;

  if (!validateEmail(emailInput.value)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  if (!validatePassword(pwInput.value)) {
    pwError.style.display = "block";
    valid = false;
  } else {
    pwError.style.display = "none";
  }

  if (pwInput.value !== confirmInput.value) {
    confirmError.style.display = "block";
    valid = false;
  } else {
    confirmError.style.display = "none";
  }

  if (valid) {
    const userData = {
      email: emailInput.value,
      username: usernameInput.value,
      password: pwInput.value,
    };

    // Lưu danh sách user
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Đặt current user
    localStorage.setItem("currentUser", JSON.stringify(userData));

    form.reset();
    window.location.href = "/accounts/account-setting.html";

  }
});

// Khi người dùng nhập lại thì kiểm tra và ẩn lỗi nếu hợp lệ
emailInput.addEventListener("input", () => {
  if (validateEmail(emailInput.value)) {
    emailError.style.display = "none";
  }
});

pwInput.addEventListener("input", () => {
  if (validatePassword(pwInput.value)) {
    pwError.style.display = "none";
  }
});

confirmInput.addEventListener("input", () => {
  if (pwInput.value === confirmInput.value) {
    confirmError.style.display = "none";
  }
});