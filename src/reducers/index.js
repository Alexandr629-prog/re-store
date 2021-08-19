import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";
import {combineReducers} from "redux";

// const reducer = (state, action) => {
//
//     return{
//         bookList: updateBookList(state, action),
//         shoppingCart: updateShoppingCart(state, action),
//     }
// };

const reducer = combineReducers({
    bookList: updateBookList,
    shoppingCart: updateShoppingCart
})

export default reducer;
