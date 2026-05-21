// Cart drawer
function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

// Mobile menu
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
  document.getElementById('mobile-overlay').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
}

// Cart AJAX - update count after add to cart
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[action*="/cart/add"]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      const data = new FormData(form);
      try {
        const res = await fetch('/cart/add.js', { method: 'POST', body: data });
        const cart = await fetch('/cart.js').then(r => r.json());
        const el = document.getElementById('cart-count');
        if (el) el.textContent = cart.item_count;
      } catch (err) { console.log(err); }
    });
  });
});
