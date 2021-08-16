import {initialProductsStore} from '../data/initialProductsStore'

export const productsReducer = (state = initialProductsStore, action: any) => {
    switch (action.type) {
        default:
            console.warn(`Brak akcji: ${action.type}`)
            return state;
    }
}