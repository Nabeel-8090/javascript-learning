import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {

    const totalQuantity = calculateCartQuantity();
    const checkoutHeaderHTML =
    `
        Checkout (<a class="return-to-home-link" href="amazon.html">${totalQuantity}</a>)
    `;

    document.querySelector(".checkout-header-middle-section").innerHTML = checkoutHeaderHTML;
}