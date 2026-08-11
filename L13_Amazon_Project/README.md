# Amazon Project & Intro to Git

### Learning

When an **"Add to Cart"** button is clicked, we only want to update the corresponding product.

1. `closest(".product-container")` starts from the clicked button and traverses up the DOM until it finds the nearest parent with the class `.product-container`.

2. This gives us the specific product container that contains the clicked button.

3. Once we have that container, we use `querySelector(".added-to-cart")` to find the `.added-to-cart` element **only inside that product**.

4. This ensures that only the clicked product's "Added" message is shown instead of showing it for every product.

```javascript
const productContainer = addToCartButton.closest(".product-container");
const addedToCart = productContainer.querySelector(".added-to-cart");

addedToCart.style.opacity = "1";
```

---

