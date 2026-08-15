import { cart, addToCart, calculateCartQuantity, loadCartFetch } from '../data/cart.js';
import { products } from '../data/products.js';

/*
(async function () {
    try {
        await loadProductsFetch();
        await loadCartFetch();
    } catch (error) {
        console.log('Unexpected error. Please try again leter.');
    }
    console.log(products);
    renderProductsGrid();
})();
*/

renderProductsGrid();
function renderProductsGrid() {
    const url = new URL(window.location.href);
    const searchQuery = url.searchParams.get('search');

    let filteredProducts = products;
    if (searchQuery) {
        filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(searchQuery.toLowerCase())
                || product.keywords.some((keyword) =>
                    keyword.toLowerCase().includes(searchQuery.toLowerCase())
                );
        });
    }

    history.replaceState(null, '', 'amazon.html');

    let productsHTML = '';
    filteredProducts.forEach((product) => {
        productsHTML +=
        `<div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src=${product.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars" src="${product.getStarsUrl()}">
                    <div class="product-rating-count link-primary">
                        ${product.rating.count}
                    </div>
            </div>

            <div class="product-price">
                ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
                <select class="quantity-selector">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                    Added
            </div>

            <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>`;
    });
    document.querySelector(".products-grid").innerHTML = productsHTML;
    if (filteredProducts.length === 0) {
        document.querySelector(".products-grid").innerHTML = `<p>No products matched your search.</p>`;
    }

    updateCartQuantity();
    function updateCartQuantity() {
        const cartQuantity = calculateCartQuantity();
        document.querySelector(".cart-quantity").innerHTML = cartQuantity;
    }

    function showAddedMessage(productContainer) {
        const addedToCart = productContainer.querySelector(".added-to-cart");
        addedToCart.style.opacity = '1';

        const previousTimeoutId =  productContainer.timeoutId;

        clearTimeout(previousTimeoutId);

        productContainer.timeoutId = setTimeout(() => {
            addedToCart.style.opacity = '0';
        }, 2000);
    }   

    document.querySelectorAll(".add-to-cart-button").forEach((button) => {
        button.addEventListener("click", () => {
            const productContainer = button.closest(".product-container");
            const quantity = Number(productContainer.querySelector(".quantity-selector").value);
            
            const productId = button.dataset.productId;

            addToCart(productId, quantity);
            updateCartQuantity();
            showAddedMessage(productContainer);
        });
    });

    function searchProducts() {
        let searchQuery = document.querySelector(".search-bar");
        if (searchQuery.value !== '') {
            window.location.href = `amazon.html?search=${searchQuery.value}`;
            searchQuery.value = '';
        }
    }
    document.querySelector(".search-button").addEventListener('click', () => {
        searchProducts();
    });
    document.querySelector(".search-bar").addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });
}