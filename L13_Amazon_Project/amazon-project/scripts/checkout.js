import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value');
        });
    })

]).then((value) => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
});



// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//         renderCheckoutHeader();
//     });
// });