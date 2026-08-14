import { orders, addOrder } from '../data/orders.js';
import { formatCurrency } from './utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { getProduct, loadProductsFetch  } from '../data/products.js';
import { cart, calculateCartQuantity, addToCart } from '../data/cart.js';

(async function () {
    try {
        await loadProductsFetch();
    } catch (error) {
        console.log('Unexpected error. Please try again leter.');
    }
    renderOrders();
})();

function renderOrders() {
    orders.forEach((order) => {
        const orderHeader = `
            <div class="order-header">
                <div class="order-header-left-section">
                    <div class="order-date">
                        <div class="order-header-label">Order Placed:</div>
                        <div>${dayjs(order.orderTime).format('MMMM D')}</div>
                    </div>
                    <div class="order-total">
                        <div class="order-header-label">Total:</div>
                        <div>$${formatCurrency(order.totalCostCents)}</div>
                    </div>
                </div>

                <div class="order-header-right-section">
                    <div class="order-header-label">Order ID:</div>
                    <div>${order.id}</div>
                </div>
            </div>
        `;

        let productImageContainerHTML = '';
        order.products.forEach((product) => {
            const matchingProduct = getProduct(product.productId);
            productImageContainerHTML += `
                <div class="product-image-container">
                <img src=${matchingProduct.image}>
                </div>

                <div class="product-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-delivery-date">
                    Arriving on: ${dayjs(product.estimatedDeliveryTime).format('MMMM D')}
                </div>
                <div class="product-quantity">
                    Quantity: ${product.quantity}
                </div>
                <button class="buy-again-button button-primary js-buy-again-${matchingProduct.id}" data-product-id=${matchingProduct.id}>
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                </button>
                </div>

                <div class="product-actions">
                <a href="tracking.html?orderId=${order.id}&productId=${matchingProduct.id}">
                    <button class="track-package-button button-secondary">
                    Track package
                    </button>
                </a>
                </div>
            `;
        });
        const ordersHTML = `
            <div class="order-container">
                ${orderHeader}            
                <div class="order-details-grid">${productImageContainerHTML}</div>
            </div>
        `;
        document.querySelector(".orders-grid").innerHTML += ordersHTML;
    });

    updateCartQuantity();
    function updateCartQuantity() {
        const cartQuantity = calculateCartQuantity();
        document.querySelector(".cart-quantity").innerHTML = cartQuantity;
    }

    let timeoutId;
    document.querySelectorAll(".buy-again-button").forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.dataset.productId;

            const previousTimeoutId = button.timeoutId;

            clearTimeout(previousTimeoutId);

            addToCart(productId, 1)
            updateCartQuantity();

            button.innerHTML = `
                <span class="buy-again-message">✓ Added</span>
            `;

            button.timeoutId = setTimeout(() => {
                button.innerHTML = `
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                `;
            }, 2000);
        });
    });       
}

