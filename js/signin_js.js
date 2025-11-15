const form = document.getElementById("signin-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("mail");
const pwInput = document.querySelector('input[name="password"]');
const pwError = document.getElementById("pw");
const confirmInput = document.querySelector('input[name="confirm-password"]');
const confirmError = document.getElementById("notmatch-pw");
const signin_btn = document.querySelector('.register-btn');
const usernameInput = document.querySelector('input[name="username"]');

let finished = false;

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

// ====================== SUBMIT =======================
signin_btn.addEventListener("click", function (e) {
  e.preventDefault();

  let valid = true;

  if (!validateEmail(emailInput.value)) {
    emailError.style.display = "block";
    valid = false;
  }

  if (!validatePassword(pwInput.value)) {
    pwError.style.display = "block";
    valid = false;
  }

  if (pwInput.value !== confirmInput.value) {
    confirmError.style.display = "block";
    valid = false;
  }

  // Nếu chưa hợp lệ → dừng
  if (!valid) return;

  // ====================== SAVE USER =======================
  const userData = {
    username: usernameInput.value,
    password: pwInput.value,
  };

  let loggedInUsers = JSON.parse(localStorage.getItem("loggedInUsers")) || [];
  loggedInUsers.push(userData);

  localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
  localStorage.setItem("currentUser", JSON.stringify(userData));

  form.reset();
  window.location.href = "../accounts/account-setting.html";
});