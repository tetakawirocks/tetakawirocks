// Product Data
const products = [
    // Cleansers
    {
        id: 1,
        name: "Gentle Foaming Cleanser",
        category: "cleansers",
        price: 32.00,
        benefits: "Purifies • Soothes • Maintains pH Balance",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Best Seller",
        description: "A gentle yet effective foaming cleanser that removes impurities while maintaining the skin's natural moisture barrier."
    },
    {
        id: 2,
        name: "Hydrating Cream Cleanser",
        category: "cleansers",
        price: 28.00,
        benefits: "Nourishes • Cleanses • Prevents Dryness",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Rich cream cleanser that gently removes makeup and impurities while infusing skin with lasting hydration."
    },
    {
        id: 3,
        name: "Charcoal Deep Clean Mask",
        category: "cleansers",
        price: 36.00,
        benefits: "Detoxifies • Minimizes Pores • Refines Texture",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Weekly treatment cleanser with activated charcoal to deeply purify and minimize the appearance of pores."
    },

    // Serums
    {
        id: 4,
        name: "Vitamin C Brightening Serum",
        category: "serums",
        price: 65.00,
        benefits: "Brightens • Evens Tone • Antioxidant Protection",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "New",
        description: "Potent vitamin C serum that brightens skin and provides powerful antioxidant protection against environmental damage."
    },
    {
        id: 5,
        name: "Hyaluronic Acid Hydrating Serum",
        category: "serums",
        price: 48.00,
        benefits: "Hydrates • Plumps • Locks in Moisture",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Lightweight serum with multiple molecular weights of hyaluronic acid for intense hydration and plumping effect."
    },
    {
        id: 6,
        name: "Retinol Renewal Serum",
        category: "serums",
        price: 72.00,
        benefits: "Smooths • Reduces Fine Lines • Accelerates Cell Turnover",
        image: "https://images.unsplash.com/photo-1608248544403-b4a38cdb6cf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Advanced retinol serum that targets fine lines and improves skin texture for a more youthful complexion."
    },
    {
        id: 7,
        name: "Niacinamide Pore Refining Serum",
        category: "serums",
        price: 42.00,
        benefits: "Minimizes Pores • Controls Oil • Smooths Texture",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Concentrated niacinamide serum that minimizes pore appearance and regulates sebum production for refined skin texture."
    },

    // Moisturizers
    {
        id: 8,
        name: "Daily Moisture Cream",
        category: "moisturizers",
        price: 38.00,
        benefits: "Hydrates • Protects • Locks in Moisture",
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Lightweight daily moisturizer that provides long-lasting hydration without feeling heavy or greasy."
    },
    {
        id: 9,
        name: "Rich Repair Night Cream",
        category: "moisturizers",
        price: 85.00,
        benefits: "Repairs • Nourishes • Anti-Aging",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Luxurious night cream with peptides and botanical oils that deeply nourish and repair skin while you sleep."
    },
    {
        id: 10,
        name: "Oil-Free Gel Moisturizer",
        category: "moisturizers",
        price: 32.00,
        benefits: "Lightweight • Non-Comedogenic • Quick Absorption",
        image: "https://images.unsplash.com/photo-1608248544403-b4a38cdb6cf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Oil-free gel moisturizer perfect for oily and combination skin types, providing hydration without clogging pores."
    },
    {
        id: 11,
        name: "Barrier Repair Cream",
        category: "moisturizers",
        price: 55.00,
        benefits: "Strengthens • Soothes • Restores",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Ceramides and cholesterol enriched cream that strengthens and repairs compromised skin barrier for healthy skin."
    },

    // Treatments
    {
        id: 12,
        name: "Acne Spot Treatment",
        category: "treatments",
        price: 29.00,
        benefits: "Targets Blemishes • Reduces Inflammation • Prevents Scarring",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Targeted treatment with salicylic acid and tea tree oil to quickly reduce the appearance of blemishes and prevent scarring."
    },
    {
        id: 13,
        name: "Eye Cream Firming Complex",
        category: "treatments",
        price: 58.00,
        benefits: "Reduces Dark Circles • Minimizes Fine Lines • Firms",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Specialized eye cream that targets fine lines, dark circles, and puffiness for a more rested and youthful appearance."
    },
    {
        id: 14,
        name: "Chemical Peel Pads",
        category: "treatments",
        price: 45.00,
        benefits: "Exfoliates • Improves Texture • Reveals Glow",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Pre-soaked pads with gentle acids that provide at-home chemical exfoliation for smoother, more radiant skin."
    },

    // Sun Care
    {
        id: 15,
        name: "Daily SPF 30 Sunscreen",
        category: "suncare",
        price: 34.00,
        benefits: "UV Protection • Anti-Aging • Non-Greasy",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Broad-spectrum sunscreen with zinc oxide and titanium dioxide, providing daily protection without white cast or greasiness."
    },
    {
        id: 16,
        name: "Tinted Moisturizer SPF 20",
        category: "suncare",
        price: 42.00,
        benefits: "Coverage • Hydration • Sun Protection",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Multi-tasking tinted moisturizer that provides light coverage, hydration, and SPF protection for a natural, radiant finish."
    },
    {
        id: 17,
        name: "After-Sun Healing Gel",
        category: "suncare",
        price: 26.00,
        benefits: "Cools • Soothes • Repairs",
        image: "https://images.unsplash.com/photo-1608248544403-b4a38cdb6cf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Cooling aloe-based gel that soothes and repairs sun-exposed skin, providing instant relief and hydration."
    }
];

// Cart functionality
let cart = [];
let currentFilter = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const filterPills = document.querySelectorAll('.filter-pill');
const navToggle = document.getElementById('navToggle');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
});

// Render products based on current filter
function renderProducts() {
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-benefits">${product.benefits}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showCartToast();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg class="empty-cart-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="empty-cart-text">Your ritual bag is empty</div>
                <button class="empty-cart-cta" onclick="scrollToProducts()">Discover Products</button>
            </div>
        `;
        cartTotal.textContent = '$0.00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div>
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// Show cart toast notification
function showCartToast() {
    // Create and show a temporary success message
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: #5D7A63;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 300;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    `;
    toast.textContent = 'Added to your ritual bag';
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// Toggle cart drawer
function toggleCart() {
    cartOverlay.classList.toggle('active');
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    cartBtn.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', toggleCart);
    
    // Close cart when clicking overlay
    cartOverlay.addEventListener('click', function(e) {
        if (e.target === cartOverlay) {
            toggleCart();
        }
    });
    
    // Filter pills
    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Update active state
            filterPills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            // Update current filter and re-render
            currentFilter = this.dataset.category;
            renderProducts();
        });
    });
    
    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        // Add mobile menu functionality here if needed
        console.log('Mobile menu toggle');
    });
    
    // Smooth scrolling for hero CTA
    document.querySelector('.hero-cta').addEventListener('click', scrollToProducts);
}

// Smooth scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && cartOverlay.classList.contains('active')) {
        toggleCart();
    }
});

// Add loading animation for images
function setupImageLoading() {
    const images = document.querySelectorAll('.product-image, .hero-img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            // Fallback for broken images
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzc2NzE2ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
        });
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', setupImageLoading);

// Add scroll animations (optional enhancement)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards for scroll animation
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', setupScrollAnimations);