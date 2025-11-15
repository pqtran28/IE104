const form = document.getElementById('login-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const remember = form.remember.checked;

    // Giả lập tài khoản hợp lệ
    const validUser = {
        username: 'admin',
        password: '123'
    };

    // Kiểm tra thông tin đăng nhập
    if (username === validUser.username && password === validUser.password) {
        // Lưu trạng thái đăng nhập vào localStorage
        const userData = {
            username,
            remember
        };

        localStorage.setItem('loggedInUser', JSON.stringify(userData));
        localStorage.setItem('currentUser', JSON.stringify(userData));
        window.location.href = '../accounts/account-setting.html'; // chuyển đến trang tài khoản
    } else {
        alert('Sai tên đăng nhập hoặc mật khẩu!');
    }
});
