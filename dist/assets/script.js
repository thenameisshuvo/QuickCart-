document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const addToWishlistBtn = document.getElementById('addToWishlistBtn');
    const removeFromCartBtn = document.getElementById('removeFromCartBtn');
    const removeFromWishlistBtn = document.getElementById('removeFromWishlistBtn');
    const cartStatus = document.getElementById('cartStatus');
    const wishlistStatus = document.getElementById('wishlistStatus');
  
    let cart = [];
    let wishlist = [];
  
    addToCartBtn.addEventListener('click', () => {
      cart.push('iPhone 16');
      updateCartStatus();
    });
  
    addToWishlistBtn.addEventListener('click', () => {
      wishlist.push('iPhone 16');
      updateWishlistStatus();
    });
  
    removeFromCartBtn.addEventListener('click', () => {
      cart = cart.filter(item => item !== 'iPhone 16');
      updateCartStatus();
    });
  
    removeFromWishlistBtn.addEventListener('click', () => {
      wishlist = wishlist.filter(item => item !== 'iPhone 16');
      updateWishlistStatus();
    });
  
    function updateCartStatus() {
      cartStatus.textContent = cart.length ? `You have ${cart.length} item(s) in your cart.` : 'Your cart is empty.';
    }
  
    function updateWishlistStatus() {
      wishlistStatus.textContent = wishlist.length ? `You have ${wishlist.length} item(s) in your wishlist.` : 'Your wishlist is empty.';
    }
  });
  