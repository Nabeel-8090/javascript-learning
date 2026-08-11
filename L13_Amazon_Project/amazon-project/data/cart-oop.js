function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = [
                    {
                        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                        quantity: 2,
                        deliveryOptionId: '1'
                    },
                    {
                        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                        quantity: 1,
                        deliveryOptionId: '2'
                    }
                ];
            }
        },

        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId, quantity) {
            const matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId);

            if (matchingItem) {
                matchingItem.quantity += quantity;
            } else {
                this.cartItems.push({ productId: productId, quantity: quantity, deliveryOptionId: '1' });
            }
            this.saveToStorage();
        },

        removeFromCart(cartItemId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== cartItemId) {
                    newCart.push(cartItem);
                }
            });
            this.cartItems = newCart;
            this.saveToStorage();
        },

        updateCartQuantity(cartItemId, quantity) {
            const cartItem = this.cartItems.find(cartItem => cartItem.productId === cartItemId);

            if (cartItem) {
                cartItem.quantity = quantity;
                this.saveToStorage();
            }
        },

        calculateCartQuantity() {
            let cartQuantity = 0;
            this.cartItems.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
            });
            return cartQuantity;
        },

        updateDeliveryOption(productId, deliveryOptionId) {
            if (deliveryOptionId !== '1' && deliveryOptionId !== '2' && deliveryOptionId !== '3') {
                return;
            }

            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            if (!matchingItem) {
                return;
            }

            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveToStorage();
        }
    };

    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);