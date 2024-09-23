// Getting elements
const addToCartBtn = document.getElementById('addToCartBtn');
const addToWishlistBtn = document.getElementById('addToWishlistBtn');
const removeFromCartBtn = document.getElementById('removeFromCartBtn');
const removeFromWishlistBtn = document.getElementById('removeFromWishlistBtn');
const cartStatus = document.getElementById('cartStatus');
const wishlistStatus = document.getElementById('wishlistStatus');
const removeBtns = document.getElementById('removeBtns');

// Cart and Wishlist state
let cart = false;
let wishlist = false;

// Add to Cart functionality
addToCartBtn.addEventListener('click', () => {
  cart = true;
  updateStatus();
});

// Add to Wishlist functionality
addToWishlistBtn.addEventListener('click', () => {
  wishlist = true;
  updateStatus();
});

// Remove from Cart functionality
removeFromCartBtn.addEventListener('click', () => {
  cart = false;
  updateStatus();
});

// Remove from Wishlist functionality
removeFromWishlistBtn.addEventListener('click', () => {
  wishlist = false;
  updateStatus();
});

// Update Cart and Wishlist Status
function updateStatus() {
  // Update Cart Status
  if (cart) {
    cartStatus.innerText = 'Product added to your cart.';
    addToCartBtn.classList.add('hidden');
    removeBtns.classList.remove('hidden');
  } else {
    cartStatus.innerText = 'Your cart is empty.';
    addToCartBtn.classList.remove('hidden');
    removeBtns.classList.add('hidden');
  }

  // Update Wishlist Status
  if (wishlist) {
    wishlistStatus.innerText = 'Product added to your wishlist.';
    addToWishlistBtn.classList.add('hidden');
  } else {
    wishlistStatus.innerText = 'Your wishlist is empty.';
    addToWishlistBtn.classList.remove('hidden');
  }
}
