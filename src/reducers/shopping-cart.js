import BookstoreService from "../serveces/bookstore-service";

const updateShoppingCart = (state, action)=>{

    if(state===undefined){
        return {
            cartItems: [],
            orderTotal: 0,
            countItems: 0
        }

    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ALL_BOOK_REMOVED_FROM_CART':
            const item = state.cartItems.find(({id})=>id===action.payload)
            return updateOrder(state, action.payload, -item.count);
        default:
            return state
    }
}

const updateCartItems = (cartItems, item, idx) => {

    if(item.count ===0){
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateOrderTotal = (cartItems, book, bookCount)=>{
    return  cartItems.reduce((total, value)=>{
        return total + value.total
    }, book.price*bookCount)
}

const updateCountTotal =(cartItems, bookCount)=>{
    return cartItems.reduce((total, book)=>{
        return total + book.count;
    },bookCount)
}

const updateCartItem = (book, item = {}, bookCount) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

    return {
        id,
        title,
        count: count + bookCount,
        total: total + bookCount * book.price
    };
};

const updateOrder = (state, bookId, bookCount)=>{
    console.log(state);
    const {  cartItems  } = state;
    const bookstoreService = new BookstoreService();
    const books = bookstoreService.data;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, bookCount);

    return {
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: updateOrderTotal(cartItems, book, bookCount),
        countItems: updateCountTotal(cartItems, bookCount)
    };
}


export default updateShoppingCart;