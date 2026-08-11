import { 
    calculateCartQuantity,
    cart,
    removeFromCart,
    addToCart,
    updateCartQuantity, 
    updateDeliveryOption
} from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { deliveryOptions, getDeliveryOption, calculateDeliveryDate } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummary } from './paymentSummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';

export function renderOrderSummary() {
    let cartHTML = '';
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

        const dateString = calculateDeliveryDate(deliveryOption);
        console.log(dateString);

        cartHTML +=
            `<div class="cart-item-container js-cart-item-container-${product.id}">
                <div class="delivery-date">
                    Delivery date: ${dateString}
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image" src=${product.image}>

                    <div class="cart-item-details">
                        <div class="product-name js-product-name-${product.id}">
                            ${product.name}
                        </div>
                        <div class="product-price js-product-price-${product.id}">
                            $${formatCurrency(product.priceCents)}
                        </div>
                        <div class="product-quantity js-product-quantity-${product.id}">
                            <span>
                                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                            </span>
                            <span class="update-quantity-link link-primary" data-item-id="${product.id}">
                                Update
                            </span>
                            <input class="quantity-input" type="number" value="${cartItem.quantity}" min="1" step="1">
                            <span class="save-quantity-link link-primary">Save</span>
                            <span class="delete-quantity-link link-primary js-delete-link-${product.id}" data-item-id="${product.id}">
                                Delete
                            </span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        ${deliveryOptionsHTML(product, cartItem)}
                    </div>
                </div>
            </div>`;
    });
    if (cart.length === 0) {
        document.querySelector(".order-summary").innerHTML =
        `
            <p>Your cart is empty.</p>
            <a href="amazon.html"><button class="checkout-view-products">View Products</button></a>
        `;
    } else {
        document.querySelector(".order-summary").innerHTML = cartHTML;
    }

    function deliveryOptionsHTML(product, cartItem) {
        let html = '';

        deliveryOptions.forEach((deliveryOption) => {
            const dateString = calculateDeliveryDate(deliveryOption);

            const priceString = deliveryOption.priceCents === 0
                ? 'FREE'
                : `$${formatCurrency(deliveryOption.priceCents)} -`;

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
                <div class="delivery-option js-delivery-option"
                data-product-id="${product.id}"
                data-delivery-option-id="${deliveryOption.id}">
                    <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input js-delivery-option-${product.id}-${deliveryOption.id} " name="delivery-option-${product.id}">
                    <div>
                        <div class="delivery-option-date">${dateString}</div>
                        <div class="delivery-option-price">${priceString} Shipping</div>
                    </div>
                </div>
            `;
        });
        return html;
    }

    document.querySelectorAll(".delete-quantity-link").forEach((deleteQuantityButton) => {
        deleteQuantityButton.addEventListener("click", () => {
            const cartItemId = deleteQuantityButton.dataset.itemId;
            removeFromCart(cartItemId);
            renderOrderSummary();
            renderPaymentSummary();
        });
    });

    document.querySelectorAll(".update-quantity-link").forEach((updateQuantityButton) => {
        updateQuantityButton.addEventListener("click", () => {
            const cartItemId = updateQuantityButton.dataset.itemId;
            const container = document.querySelector(`.js-cart-item-container-${cartItemId}`);
            container.classList.add("is-editing-quantity");

            const saveButton = container.querySelector(".save-quantity-link");

            saveButton.addEventListener("click", () => {
                const quantity = Number(container.querySelector(".quantity-input").value);
                updateCartQuantity(cartItemId, quantity);
                container.classList.remove("is-editing-quantity");
                renderOrderSummary();
                renderPaymentSummary();
            });
        });
    });

    document.querySelectorAll(".js-delivery-option").forEach((element) => {
        element.addEventListener("click", () => {
            const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            renderOrderSummary();
            renderPaymentSummary();
        });
    });

    //renderCheckoutHeader();
}