import { createStore } from 'vuex';

function parsePrice(priceString) {
    const price = parseFloat(priceString.replace("$", ""));
    return isNaN(price) ? 0 : price; // Default to 0 if the price isn't valid
}

export default createStore({
    state: {
        cart: []
    },
    getters: {
        cartProducts: state => state.cart,
        cartItemCount: state => {
            return state.cart.reduce((acc, product) => acc + product.quantity, 0);
        },

        cartTotalPrice: state => {
            return state.cart.reduce((acc, product) => {
                const productPrice = parsePrice(product.price); // Ensure price is a number, after parsing
                const productQuantity = parseInt(product.quantity, 10) || 0; // Convert to int and default to 0 if NaN
                return acc + productPrice * productQuantity;
            }, 0);
        }
    },
    mutations: {
        addToCart(state, product) {
            const productInCart = state.cart.find(p => p.id === product.id);
            if (productInCart) {
                productInCart.quantity++;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        incrementProductQuantity(state, productId) {
            const product = state.cart.find(p => p.id === productId);
            if (product) {
                product.quantity = (product.quantity || 0) + 1;
            }
        },
        decrementProductQuantity(state, productId) {
            const product = state.cart.find(p => p.id === productId);
            if (product && product.quantity > 0) {
                product.quantity--;
            }
        },
        removeProductFromCart(state, productId) {
            state.cart = state.cart.filter(p => p.id !== productId);
        }
    },
    actions: {
        addProductToCart({ commit }, product) {
            commit('addToCart', product);
        },
        increaseQuantity({ commit }, productId) {
            commit('incrementProductQuantity', productId);
        },
        decreaseQuantity({ commit }, productId) {
            commit('decrementProductQuantity', productId);
        },
        removeProductFromCart({ commit }, productId) {
            commit('removeProductFromCart', productId);
        }
    }
});
