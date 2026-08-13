import { cart, calculateCartQuantity } from '../../data/cart.js';
import { formatCurrency } from '../utils/money.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { addOrder } from '../../data/orders.js';

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = 
    `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${calculateCartQuantity()}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money js-payment-summary-shipping">$${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money js-payment-summary-total">$${formatCurrency(totalCents)}</div>
        </div>

        <a href="orders.html" class="place-order-link">
            <button class="place-order-button button-primary js-place-order">
                Place your order
            </button>
        </a>
    `;
    document.querySelector(".payment-summary").innerHTML = paymentSummaryHTML;

    if (cart.length === 0) {
        document.querySelector(".place-order-link").classList.add("zero-cart");
    }

    document.querySelector('.js-place-order').addEventListener('click', async (event) => {
        try {
            const response = await fetch('https://supersimplebackend.dev/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cart: cart
                })
            });

            const order = await response.json();
            addOrder(order);
        } catch (error) {
            console.log('Unexpected error. Try agai later.');
        }

        window.location.href = 'orders.html';
    });
}