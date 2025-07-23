(function() {
  function showLogin() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) overlay.removeAttribute('hidden');
  }
  function hideLogin() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) overlay.setAttribute('hidden', '');
  }
  window.addEventListener('DOMContentLoaded', () => {
    // register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js');
    }
    const savedUser = localStorage.getItem('hjmops_user');
    if (!savedUser) {
      showLogin();
    } else {
      hideLogin();
    }
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const username = formData.get('username') || 'Ryan';
        const role = formData.get('role') || 'dispatcher';
        localStorage.setItem('hjmops_user', username);
        localStorage.setItem('hjmops_role', role);
        hideLogin();
      });
    }
  });
})();