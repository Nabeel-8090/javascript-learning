import { calculateCartQuantity } from '../data/cart.js';
import { getProduct, loadProductsFetch } from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { orders } from '../data/orders.js';

(async function () {
    try {
        await loadProductsFetch();
    } catch (error) {
        console.log('Unexpected error. Please try again leter.');
    }
    renderTrackingProducts();
})();

function renderTrackingProducts() {

    const url = new URL(window.location.href);
    const orderId =  url.searchParams.get('orderId');
    const productId =  url.searchParams.get('productId');

    const matchingProduct = getProduct(productId);
    const matchingOrder = orders.find(order => order.id === orderId);
    const trackingProduct = matchingOrder.products.find(product => product.productId === productId);

    const currentTime = dayjs();
    const orderTime = dayjs(matchingOrder.orderTime);
    const deliveryTime = dayjs(trackingProduct.estimatedDeliveryTime);

    const elapsedTime = currentTime.diff(orderTime);
    const totalTime = deliveryTime.diff(orderTime);

    const deliveryProgress = Number(((elapsedTime / totalTime) * 100).toFixed(2));

    const trackingHTML = `
        <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
        </a>

        <div class="delivery-date">
            Arriving on ${dayjs(trackingProduct.estimatedDeliveryTime).format('dddd, MMMM D')}
        </div>

        <div class="product-info">
            ${matchingProduct.name}
        </div>

        <div class="product-info">
            Quantity: ${trackingProduct.quantity}
        </div>

        <img class="product-image" src=${matchingProduct.image}>

        <div class="progress-labels-container">
            <div class="progress-label preparing">
                Preparing
            </div>
            <div class="progress-label shipped">
                Shipped
            </div>
            <div class="progress-label delivered">
                Delivered
            </div>
        </div>

        <div class="progress-bar-container">
            <div class="progress-bar"></div>
        </div>
    `;
    document.querySelector(".order-tracking").innerHTML = trackingHTML;

    if (deliveryProgress >= 0 && deliveryProgress < 50.) {
        document.querySelector(".preparing").classList.add("current-status");
    } else if (deliveryProgress >= 50 && deliveryProgress < 100) {
        document.querySelector(".shipped").classList.add("current-status");
    } else if (deliveryProgress >= 100) {
        document.querySelector(".delivered").classList.add("current-status");
    }

    document.querySelector(".progress-bar").style.width = `${deliveryProgress}%`;

    const cartQuantity = calculateCartQuantity();
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}