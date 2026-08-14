export let cart;

loadFromStorage();
export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
}

function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, quantity) {
    const matchingItem = cart.find(cartItem => cartItem.productId === productId);

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({ productId: productId, quantity: quantity, deliveryOptionId: '1' });
    }
    saveToStorage();
}

export function removeFromCart(cartItemId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== cartItemId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

export function clearCart() {
    cart.length = 0;
    saveToStorage();
}

export function updateCartQuantity(cartItemId, quantity) {
    const cartItem = cart.find(cartItem => cartItem.productId === cartItemId);

    if (cartItem) {
        cartItem.quantity = quantity;
        saveToStorage();
    }
}

export function calculateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    if (deliveryOptionId !== '1' && deliveryOptionId !== '2' && deliveryOptionId !== '3') {
        return;
    }

    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (!matchingItem) {
        return;
    }

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}

export async function loadCartFetch() {  // actually we are using this
    const response = await fetch('https://supersimplebackend.dev/cart');
    const data = await response.text();
    console.log(data);
}