import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart: JSON.parse(localStorage.getItem('shopping-cart')) || []
        };
    },
    mutations: {
        addToCart(state, product) {
            state.cart.push(product);
        },
        removeFromCart(state, productId) {
            const index = state.cart.findIndex(p => p.id === productId);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
        incrementProductQuantity(state, productId) {
            const product = state.cart.find(p => p.id === productId);
            if (product) {
                product.quantity++;
            }
        },
        decrementProductQuantity(state, productId) {
            const product = state.cart.find(p => p.id === productId);
            if (product && product.quantity > 0) {
                product.quantity--;
                if (product.quantity === 0) {
                    this.commit('removeFromCart', productId);
                }
            }
        },
        saveCart(state) {
            localStorage.setItem('shopping-cart', JSON.stringify(state.cart));
        }
    },
    actions: {
        addProductToCart(context, product) {
            context.commit('addToCart', product);
        },
        removeProductFromCart(context, productId) {
            context.commit('removeFromCart', productId);
        },
        increaseQuantity(context, productId) {
            context.commit('incrementProductQuantity', productId);
        },
        decreaseQuantity(context, productId) {
            context.commit('decrementProductQuantity', productId);
        },
        saveCartToLocalStorage(context) {
            context.commit('saveCart');
        }
    },
    getters: {
        cartProducts(state) {
            return state.cart;
        },
        cartItemCount(state) {
            return state.cart.length;
        },
        cartTotalPrice(state) {
            return state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
        }
    }
});

store.watch((state) => state.cart, () => {
    store.dispatch('saveCartToLocalStorage');
}, { deep: true });

export default store;
