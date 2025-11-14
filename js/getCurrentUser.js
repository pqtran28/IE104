function getCurrentUser() {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '../homepage/homepage.html';
}


