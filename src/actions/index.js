const booksLoaded = (newBooks)=>{
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksRequested = ()=>{
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksError =(err)=>{
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
}

const bookLoaded = (newBooks)=>{
    return {
        type: 'FETCH_BOOK_SUCCESS',
        payload: newBooks
    }
}

const bookRequested = ()=>{
    return {
        type: 'FETCH_BOOK_REQUEST'
    }
}

const bookError =(err)=>{
    return{
        type: 'FETCH_BOOK_FAILURE',
        payload: err
    }
}

const bookAddedToCart = (newBook)=>{
    return{
        type: 'BOOK_ADDED_TO_CART',
        payload: newBook
    }
}

const bookRemoveFromCart = (book)=>{
    return{
        type: 'BOOK_REMOVED_FROM_CART',
        payload: book
    }
}

const allBooksRemoveFromCart = (book)=>{
    return {
        type: 'ALL_BOOK_REMOVED_FROM_CART',
        payload: book
    }
}

const searchBookByName =(title)=>{
    return{
        type: 'SEARCH_BOOK_BY_NAME',
        payload: title
    }
}

const titleBookToSearch =(title)=>{
    return{
        type: 'GET_TITLE_TO_INPUT',
        payload: title
    }
}

// const fetchBooks= (bookstoreService, dispatch)=>()=>{
//     dispatch(booksRequested());
//     bookstoreService.getBook()
//         .then((data)=> dispatch(booksLoaded(data)))
//         .catch((err)=>{
//             console.log(err);
//             dispatch(booksError(err));
//         });
// }

const setTotalBooks = (totalBooks)=>{
      return   {
          type: "SET_TOTAL_BOOKS",
          payload: totalBooks
      }
}


const fetchBooks =(bookstoreService, visibleBooks, currentPage, searchBook)=>{
    return async (dispatch)=> {
        dispatch(booksRequested());
        const response = await bookstoreService.getBook()
            .then((data) => data)
            .catch((err) => {
                console.log(err);
                dispatch(booksError(err));
            });
        dispatch(booksLoaded(response));
        dispatch(searchBookByName(searchBook))

    }
};

const fetchBookById = (bookstoreService, bookId)=>{
    return async (dispatch)=>{
        dispatch(bookRequested())
        const response = await bookstoreService.getBookById(bookId)
            .then((data) => data)
            .catch((err) => {
                console.log(err);
                dispatch(bookError(err));
            });
        console.log(response);
        dispatch(bookLoaded(response));
    }
}

const setCurrentPage = (currentPage)=>{
    return{
        type: 'SET_CURRENT_PAGE',
        payload: currentPage
    }
}


export {
    fetchBooks,
    fetchBookById,
    bookAddedToCart,
    bookRemoveFromCart,
    allBooksRemoveFromCart,
    searchBookByName,
    setCurrentPage,
    setTotalBooks,
    titleBookToSearch
}