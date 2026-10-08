/* =========================================================
   SAVOUR FOODS - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        id: 1,
        name: "Chicken Pulao",
        category: "rice",
        price: 420,
        oldPrice: 480,
        rating: 4.9,
        reviews: 156,
        emoji: "🍚",
        description:
            "Fragrant basmati rice cooked with tender chicken and traditional spices.",
        popular: true
    },

    {
        id: 2,
        name: "Savour Special Pulao",
        category: "rice",
        price: 550,
        oldPrice: 620,
        rating: 4.9,
        reviews: 203,
        emoji: "🍛",
        description:
            "Our signature rice dish prepared with premium ingredients.",
        popular: true
    },

    {
        id: 3,
        name: "Chicken Karahi",
        category: "chicken",
        price: 850,
        oldPrice: 950,
        rating: 4.8,
        reviews: 189,
        emoji: "🍗",
        description:
            "Tender chicken cooked in a rich tomato, ginger and green chilli masala.",
        popular: true
    },

    {
        id: 4,
        name: "Chicken Handi",
        category: "chicken",
        price: 900,
        oldPrice: 1000,
        rating: 4.7,
        reviews: 132,
        emoji: "🍲",
        description:
            "Creamy traditional chicken handi with aromatic herbs and spices.",
        popular: false
    },

    {
        id: 5,
        name: "Chicken Tikka",
        category: "bbq",
        price: 520,
        oldPrice: 580,
        rating: 4.8,
        reviews: 241,
        emoji: "🍗",
        description:
            "Juicy grilled chicken marinated with traditional BBQ spices.",
        popular: true
    },

    {
        id: 6,
        name: "Seekh Kabab",
        category: "bbq",
        price: 480,
        oldPrice: 530,
        rating: 4.8,
        reviews: 176,
        emoji: "🍖",
        description:
            "Juicy minced beef seekh kababs grilled to perfection.",
        popular: true
    },

    {
        id: 7,
        name: "Beef Bihari Kabab",
        category: "bbq",
        price: 650,
        oldPrice: 720,
        rating: 4.9,
        reviews: 115,
        emoji: "🥩",
        description:
            "Tender beef marinated in traditional Bihari spices.",
        popular: false
    },

    {
        id: 8,
        name: "Chicken Nuggets",
        category: "sides",
        price: 350,
        oldPrice: 390,
        rating: 4.5,
        reviews: 87,
        emoji: "🍗",
        description:
            "Crispy golden chicken nuggets served with sauce.",
        popular: false
    },

    {
        id: 9,
        name: "French Fries",
        category: "sides",
        price: 220,
        oldPrice: 250,
        rating: 4.6,
        reviews: 104,
        emoji: "🍟",
        description:
            "Golden crispy fries with a lightly seasoned finish.",
        popular: false
    },

    {
        id: 10,
        name: "Fresh Lime",
        category: "drinks",
        price: 150,
        oldPrice: 180,
        rating: 4.6,
        reviews: 75,
        emoji: "🍋",
        description:
            "Refreshing chilled lime drink.",
        popular: false
    },

    {
        id: 11,
        name: "Mint Margarita",
        category: "drinks",
        price: 220,
        oldPrice: 250,
        rating: 4.8,
        reviews: 91,
        emoji: "🥤",
        description:
            "Refreshing mint and lime drink served chilled.",
        popular: false
    },

    {
        id: 12,
        name: "Soft Drink",
        category: "drinks",
        price: 120,
        oldPrice: 140,
        rating: 4.4,
        reviews: 51,
        emoji: "🥤",
        description:
            "Chilled soft drink.",
        popular: false
    },

    {
        id: 13,
        name: "Kheer",
        category: "desserts",
        price: 250,
        oldPrice: 290,
        rating: 4.8,
        reviews: 123,
        emoji: "🍮",
        description:
            "Traditional creamy rice pudding with cardamom and nuts.",
        popular: false
    },

    {
        id: 14,
        name: "Gulab Jamun",
        category: "desserts",
        price: 220,
        oldPrice: 260,
        rating: 4.7,
        reviews: 110,
        emoji: "🍩",
        description:
            "Soft traditional gulab jamun served warm.",
        popular: false
    },

    {
        id: 15,
        name: "Family Pulao Deal",
        category: "rice",
        price: 1450,
        oldPrice: 1700,
        rating: 4.9,
        reviews: 98,
        emoji: "🍱",
        description:
            "A generous family meal with pulao, chicken and sides.",
        popular: true
    },

    {
        id: 16,
        name: "BBQ Platter",
        category: "bbq",
        price: 1650,
        oldPrice: 1900,
        rating: 4.9,
        reviews: 145,
        emoji: "🍖",
        description:
            "A delicious selection of grilled BBQ favourites.",
        popular: true
    }

];


/* =========================================================
   STATE
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("savourCart")
    ) || [];

let wishlist =
    JSON.parse(
        localStorage.getItem("savourWishlist")
    ) || [];

let currentCategory = "all";

let modalProductId = null;

let modalQuantityValue = 1;

let appliedCoupon = "";

let lastOrder =
    JSON.parse(
        localStorage.getItem("savourOrder")
    ) || null;


/* =========================================================
   HELPERS
========================================================= */

function saveData() {

    localStorage.setItem(
        "savourCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "savourWishlist",
        JSON.stringify(wishlist)
    );

}


function money(value) {

    return "Rs. " +
        Number(value).toLocaleString();

}


function showToast(message) {

    const element =
        document.getElementById("appToast");

    const messageElement =
        document.getElementById("toastMessage");

    if (!element || !messageElement) {

        alert(message);

        return;

    }

    messageElement.textContent = message;

    const toast =
        bootstrap.Toast.getOrCreateInstance(
            element
        );

    toast.show();

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(item => {

            item.classList.remove(
                "active-page"
            );

        });


    const target =
        document.getElementById(
            page + "Page"
        );


    if (target) {

        target.classList.add(
            "active-page"
        );

    }


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.dataset.page === page
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (page === "menu") {

        renderProducts();

    }

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    const discount =
        Math.round(
            (
                (product.oldPrice - product.price)
                / product.oldPrice
            ) * 100
        );


    const isFavorite =
        wishlist.includes(product.id);


    return `

        <div class="col-md-6 col-lg-4 col-xl-3">

            <div class="product-card">

                <div
                    class="product-image"
                    onclick="openProduct(${product.id})"
                >

                    <span class="discount">
                        ${discount}% OFF
                    </span>


                    <button
                        class="wishlist-product"
                        onclick="
                            event.stopPropagation();
                            toggleWishlist(${product.id});
                        "
                    >

                        <i
                            class="bi ${
                                isFavorite
                                    ? "bi-heart-fill"
                                    : "bi-heart"
                            }"
                        ></i>

                    </button>


                    <div class="food-image">
                        ${product.emoji}
                    </div>

                </div>


                <div class="product-info">

                    <div class="product-rating">

                        ★ ${product.rating}

                        <small>
                            (${product.reviews})
                        </small>

                    </div>


                    <h5>
                        ${product.name}
                    </h5>


                    <p>
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <div class="product-price">

                            <strong>
                                ${money(product.price)}
                            </strong>

                            <del>
                                ${money(product.oldPrice)}
                            </del>

                        </div>


                        <button
                            class="add-button"
                            onclick="addToCart(${product.id})"
                        >
                            <i class="bi bi-plus"></i>
                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   HOME PRODUCTS
========================================================= */

function renderPopularProducts() {

    const container =
        document.getElementById(
            "popularProducts"
        );

    if (!container) return;


    const popular =
        products
            .filter(
                product => product.popular
            )
            .slice(0, 8);


    container.innerHTML =
        popular
            .map(createProductCard)
            .join("");

}


/* =========================================================
   MENU FILTER
========================================================= */

function filterCategory(category) {

    currentCategory = category;


    document
        .querySelectorAll(".category-tab")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category ===
                    category
            );

        });


    renderProducts();

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    const container =
        document.getElementById(
            "menuProducts"
        );

    if (!container) return;


    let filtered =
        [...products];


    if (
        currentCategory !== "all"
    ) {

        filtered =
            filtered.filter(
                product =>
                    product.category ===
                    currentCategory
            );

    }


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    if (search) {

        filtered =
            filtered.filter(
                product =>

                    product.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.description
                        .toLowerCase()
                        .includes(search)

            );

    }


    const sort =
        document.getElementById(
            "sortSelect"
        );


    if (sort) {

        if (sort.value === "low") {

            filtered.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        if (sort.value === "high") {

            filtered.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        if (sort.value === "rating") {

            filtered.sort(
                (a, b) =>
                    b.rating - a.rating
            );

        }

    }


    container.innerHTML =
        filtered
            .map(createProductCard)
            .join("");


    const noResults =
        document.getElementById(
            "noResults"
        );


    if (noResults) {

        noResults.classList.toggle(
            "d-none",
            filtered.length !== 0
        );

    }

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(id) {

    const product =
        products.find(
            item => item.id === Number(id)
        );


    if (!product) return;


    modalProductId =
        product.id;

    modalQuantityValue = 1;


    const content =
        document.getElementById(
            "productModalContent"
        );


    content.innerHTML = `

        <div class="modal-product-image">
            ${product.emoji}
        </div>


        <div class="modal-product-content">

            <div class="product-rating">
                ★ ${product.rating}
                <small>
                    (${product.reviews} reviews)
                </small>
            </div>


            <h2>
                ${product.name}
            </h2>


            <p>
                ${product.description}
            </p>


            <div class="modal-price">
                ${money(product.price)}
            </div>


            <div class="modal-quantity">

                <button
                    onclick="changeModalQuantity(-1)"
                >
                    -
                </button>

                <span id="modalQuantity">
                    1
                </span>

                <button
                    onclick="changeModalQuantity(1)"
                >
                    +
                </button>

            </div>


            <button
                class="btn btn-primary w-100 btn-lg"
                onclick="addModalProduct()"
            >
                Add to Cart
                <i class="bi bi-cart3"></i>
            </button>

        </div>

    `;


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById(
                "productModal"
            )
        );


    modal.show();

}


function changeModalQuantity(change) {

    modalQuantityValue =
        Math.max(
            1,
            modalQuantityValue + change
        );


    const element =
        document.getElementById(
            "modalQuantity"
        );


    if (element) {

        element.textContent =
            modalQuantityValue;

    }

}


function addModalProduct() {

    addToCart(
        modalProductId,
        modalQuantityValue
    );


    const modal =
        bootstrap.Modal.getInstance(
            document.getElementById(
                "productModal"
            )
        );


    if (modal) {
        modal.hide();
    }

}


/* =========================================================
   CART
========================================================= */

function addToCart(
    productId,
    quantity = 1
) {

    const product =
        products.find(
            item =>
                item.id === Number(productId)
        );


    if (!product) return;


    const existing =
        cart.find(
            item =>
                item.id === product.id
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,

            quantity: quantity

        });

    }


    saveData();

    updateCounters();

    showToast(
        `${product.name} added to cart`
    );

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== Number(id)
        );


    saveData();

    updateCounters();

    renderCart();

}


function changeCartQuantity(
    id,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === Number(id)
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveData();

    updateCounters();

    renderCart();

}


function getDetailedCart() {

    return cart
        .map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            if (!product) return null;


            return {

                ...product,

                quantity:
                    item.quantity

            };

        })
        .filter(Boolean);

}


/* =========================================================
   CART UI
========================================================= */

function openCart() {

    renderCart();


    const cartCanvas =
        bootstrap.Offcanvas.getOrCreateInstance(
            document.getElementById(
                "cartCanvas"
            )
        );


    cartCanvas.show();

}


function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!container) return;


    const items =
        getDetailedCart();


    if (!items.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h4>
                    Your cart is empty
                </h4>

                <p>
                    Add some delicious food first.
                </p>

                <button
                    class="btn btn-primary"
                    onclick="
                        bootstrap.Offcanvas
                            .getInstance(
                                document.getElementById('cartCanvas')
                            )
                            .hide();

                        showPage('menu');
                    "
                >
                    Browse Menu
                </button>

            </div>

        `;


        updateCartTotals();

        return;

    }


    container.innerHTML =
        items.map(item => `

            <div class="cart-item">

                <div class="cart-food">
                    ${item.emoji}
                </div>


                <div class="cart-info">

                    <h6>
                        ${item.name}
                    </h6>

                    <strong>
                        ${money(item.price)}
                    </strong>


                    <div class="quantity-control">

                        <button
                            onclick="
                                changeCartQuantity(
                                    ${item.id},
                                    -1
                                )
                            "
                        >
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="
                                changeCartQuantity(
                                    ${item.id},
                                    1
                                )
                            "
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    onclick="
                        removeFromCart(${item.id})
                    "
                >
                    <i class="bi bi-trash"></i>
                </button>

            </div>

        `).join("");


    updateCartTotals();

}


function getSubtotal() {

    return getDetailedCart()
        .reduce(
            (total, item) =>
                total +
                item.price *
                item.quantity,
            0
        );

}


function getDiscount() {

    const subtotal =
        getSubtotal();


    if (
        appliedCoupon === "WELCOME20" ||
        appliedCoupon === "FAMILY20"
    ) {

        return Math.round(
            subtotal * .20
        );

    }


    return 0;

}


function updateCartTotals() {

    const subtotal =
        getSubtotal();


    const discount =
        getDiscount();


    const delivery =
        subtotal > 0 ? 150 : 0;


    const total =
        Math.max(
            0,
            subtotal +
            delivery -
            discount
        );


    const subtotalElement =
        document.getElementById(
            "cartSubtotal"
        );


    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            money(subtotal);

    }


    if (totalElement) {

        totalElement.textContent =
            money(total);

    }


    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );


    if (checkoutTotal) {

        checkoutTotal.textContent =
            money(total);

    }

}


/* =========================================================
   COUNTERS
========================================================= */

function updateCounters() {

    const cartCount =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const cartElement =
        document.getElementById(
            "cartCount"
        );


    if (cartElement) {

        cartElement.textContent =
            cartCount;

    }


    const wishlistElement =
        document.getElementById(
            "wishlistCount"
        );


    if (wishlistElement) {

        wishlistElement.textContent =
            wishlist.length;

    }

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {

    id = Number(id);


    const index =
        wishlist.indexOf(id);


    if (index === -1) {

        wishlist.push(id);

        showToast(
            "Added to favourites"
        );

    } else {

        wishlist.splice(
            index,
            1
        );

        showToast(
            "Removed from favourites"
        );

    }


    saveData();

    updateCounters();

    renderPopularProducts();

    renderProducts();

    renderWishlist();

}


function openWishlist() {

    renderWishlist();


    const modal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById(
                "wishlistModal"
            )
        );


    modal.show();

}


function renderWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );


    if (!container) return;


    const favorites =
        products.filter(
            product =>
                wishlist.includes(
                    product.id
                )
        );


    if (!favorites.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>
                    ❤️
                </div>

                <h4>
                    No favourites yet
                </h4>

                <p>
                    Add your favourite dishes here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        favorites.map(product => `

            <div class="wishlist-product">

                <div class="wishlist-image">
                    ${product.emoji}
                </div>


                <div class="wishlist-info">

                    <h6>
                        ${product.name}
                    </h6>

                    <strong>
                        ${money(product.price)}
                    </strong>

                </div>


                <div class="wishlist-actions">

                    <button
                        class="btn btn-primary btn-sm"
                        onclick="
                            addToCart(${product.id});
                        "
                    >
                        <i class="bi bi-cart-plus"></i>
                    </button>


                    <button
                        class="btn btn-outline-danger btn-sm"
                        onclick="
                            toggleWishlist(${product.id});
                        "
                    >
                        <i class="bi bi-trash"></i>
                    </button>

                </div>

            </div>

        `).join("");

}


/* =========================================================
   COUPONS
========================================================= */

function useCoupon(code) {

    appliedCoupon =
        code.toUpperCase();


    showToast(
        `${appliedCoupon} applied.`
    );


    showPage("menu");


    setTimeout(
        () => openCart(),
        400
    );

}


function applyCouponFromInput() {

    const code =
        prompt(
            "Enter promo code:"
        );


    if (!code) return;


    const normalized =
        code.trim().toUpperCase();


    if (
        normalized === "WELCOME20" ||
        normalized === "FAMILY20"
    ) {

        appliedCoupon =
            normalized;

        showToast(
            "20% discount applied!"
        );

    } else {

        showToast(
            "Invalid promo code."
        );

    }

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (!cart.length) {

        showToast(
            "Your cart is empty."
        );

        return;

    }


    updateCartTotals();


    const cartCanvas =
        bootstrap.Offcanvas.getInstance(
            document.getElementById(
                "cartCanvas"
            )
        );


    if (cartCanvas) {

        cartCanvas.hide();

    }


    const checkout =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById(
                "checkoutModal"
            )
        );


    checkout.show();


    updateCheckoutTotal();

}


function updateCheckoutTotal() {

    const subtotal =
        getSubtotal();


    const discount =
        getDiscount();


    const delivery =
        subtotal > 0 ? 150 : 0;


    const total =
        Math.max(
            0,
            subtotal +
            delivery -
            discount
        );


    const element =
        document.getElementById(
            "checkoutTotal"
        );


    if (element) {

        element.textContent =
            money(total);

    }

}


/* =========================================================
   PLACE ORDER
========================================================= */

function placeOrder(event) {

    event.preventDefault();


    if (!cart.length) {

        showToast(
            "Your cart is empty."
        );

        return;

    }


    const name =
        document.getElementById(
            "customerName"
        ).value.trim();


    const phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();


    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();


    const city =
        document.getElementById(
            "customerCity"
        ).value;


    const payment =
        document.getElementById(
            "paymentMethod"
        ).value;


    const orderType =
        document.querySelector(
            'input[name="orderType"]:checked'
        ).value;


    const subtotal =
        getSubtotal();


    const discount =
        getDiscount();


    const delivery =
        orderType === "pickup"
            ? 0
            : 150;


    const total =
        Math.max(
            0,
            subtotal +
            delivery -
            discount
        );


    const orderId =
        "SF" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    lastOrder = {

        id: orderId,

        name: name,

        phone: phone,

        address: address,

        city: city,

        payment: payment,

        orderType: orderType,

        items:
            getDetailedCart(),

        subtotal: subtotal,

        delivery: delivery,

        discount: discount,

        total: total,

        status: "confirmed",

        createdAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "savourOrder",
        JSON.stringify(lastOrder)
    );


    cart = [];

    appliedCoupon = "";


    saveData();

    updateCounters();


    const checkout =
        bootstrap.Modal.getInstance(
            document.getElementById(
                "checkoutModal"
            )
        );


    if (checkout) {

        checkout.hide();

    }


    document.getElementById(
        "orderNumber"
    ).textContent =
        orderId;


    setTimeout(
        () => {

            const success =
                bootstrap.Modal.getOrCreateInstance(
                    document.getElementById(
                        "successModal"
                    )
                );

            success.show();

        },
        400
    );

}


/* =========================================================
   ORDER TRACKING
========================================================= */

function showTracking() {

    const success =
        bootstrap.Modal.getInstance(
            document.getElementById(
                "successModal"
            )
        );


    if (success) {

        success.hide();

    }


    if (!lastOrder) {

        showToast(
            "You don't have a recent order."
        );

        return;

    }


    document.getElementById(
        "trackingNumber"
    ).textContent =
        lastOrder.id;


    setTimeout(
        () => {

            const tracking =
                bootstrap.Modal.getOrCreateInstance(
                    document.getElementById(
                        "trackingModal"
                    )
                );

            tracking.show();

        },
        350
    );

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

    const modal =
        bootstrap.Modal.getOrCreateInstance(
            document.getElementById(
                "loginModal"
            )
        );


    modal.show();

}


function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "loginEmail"
        ).value;


    const user = {

        email: email,

        loggedIn: true,

        loginDate:
            new Date().toISOString()

    };


    localStorage.setItem(
        "savourUser",
        JSON.stringify(user)
    );


    const modal =
        bootstrap.Modal.getInstance(
            document.getElementById(
                "loginModal"
            )
        );


    if (modal) {

        modal.hide();

    }


    showToast(
        "Login successful!"
    );

}


function demoGoogleLogin() {

    const user = {

        email:
            "demo@savourfoods.example",

        loggedIn: true,

        provider: "Google"

    };


    localStorage.setItem(
        "savourUser",
        JSON.stringify(user)
    );


    const modal =
        bootstrap.Modal.getInstance(
            document.getElementById(
                "loginModal"
            )
        );


    if (modal) {

        modal.hide();

    }


    showToast(
        "Google demo login successful!"
    );

}


/* =========================================================
   CONTACT
========================================================= */

function submitContact(event) {

    event.preventDefault();


    showToast(
        "Your message has been sent successfully."
    );


    event.target.reset();

}


/* =========================================================
   NEWSLETTER
========================================================= */

function subscribeNewsletter(event) {

    event.preventDefault();


    const email =
        event.target
            .querySelector("input")
            .value;


    localStorage.setItem(
        "savourNewsletter",
        email
    );


    showToast(
        "You are subscribed successfully!"
    );


    event.target.reset();

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderPopularProducts();

        renderProducts();

        updateCounters();

    }
);