function getCurrentUser() {
  const userData = localStorage.getItem('currentUser');
  if (!userData) return null; // nếu chưa đăng nhập

  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Lỗi parse dữ liệu currentUser:', error);
    return null;
  }
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '/homepage/homepage.html';
}


