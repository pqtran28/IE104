const form = document.getElementById('login-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const remember = form.remember.checked;
    let verifiedUsers = JSON.parse(localStorage.getItem("verifiedUsers")) || [];
    let loggedInUsers = JSON.parse(localStorage.getItem("loggedInUsers")) || [];

    const found = verifiedUsers.find(user => 
    user.username === username && user.password === password
    );

    let userData = {
        username: username,
        password: password
    }

    // Kiểm tra thông tin đăng nhập
    if (found) {
        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem('currentUser', JSON.stringify(userData));

        const alreadyLogged = loggedInUsers.some(user => user.username === username);

        if(!alreadyLogged) {
            loggedInUsers.push(userData);
            localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
        }
        
        window.location.href = '../accounts/account-setting.html'; // chuyển đến trang tài khoản
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
});

const registerBtn = document.querySelector('.intro-sign-up__img button');

registerBtn.addEventListener('click', () => {
    window.location.href = '../accounts/account-signin.html';
});
