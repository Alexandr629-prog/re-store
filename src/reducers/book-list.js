import {searchBookByName} from "../actions";

const updateBookList =(state, action)=>{

    if(state === undefined){
        return {
            books: [],
            visibleBooks: [],
            bookDescription: {},
            loading: true,
            loadingDescr: true,
            error: null,
            term: '',
            currentPage: 1,
            perPage: 6,
            totalBooks: 0
        }
    }
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                visibleBooks: [],
                loading: true,
                error: null,
                //term: ''
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                visibleBooks: action.payload
            .slice(state.perPage * (state.currentPage - 1),
                state.perPage * state.currentPage),
                loading: false,
                error: null,
                //totalBooks: action.payload.length
                //term: ''
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                visibleBooks: [],
                loading: false,
                error: action.payload,
                term: ''
            };
        case 'FETCH_BOOK_REQUEST':
            return {
                ...state,
                bookDescription: {},
                loadingDescr: true,
                error: null,
            };

        case 'FETCH_BOOK_SUCCESS':
            return {
                ...state,
                bookDescription: action.payload,
                loadingDescr: false,
                error: null,
            };

        case 'FETCH_BOOK_FAILURE':
            return {
                ...state,
                bookDescription: {},
                loadingDescr: false,
                error: action.payload,
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };
        case 'SET_TOTAL_BOOKS':
            return{
                ...state,
                totalBooks: action.payload
            }
        case 'SEARCH_BOOK_BY_NAME':
            return updateSelectBook(state, action.payload)
        case 'GET_TITLE_TO_INPUT':
            return {
                ...state,
                term: action.payload
            }
        default:
            return state
    }
}

const updateSelectBook = (state, bookSearch)=> {
    const {books} = state;
    let filterBooks = books.filter((book)=>{
        return book.title.toLowerCase().slice(0, bookSearch.length) === bookSearch.toLowerCase()
    })
    if(bookSearch =='' && state.totalBooks!=books.length){
        return{
            ...state,
            visibleBooks: filterBooks.slice(state.perPage * (state.currentPage - 1),
                state.perPage * state.currentPage),
            totalBooks: filterBooks.length,
            currentPage: 1
        }
    }

    if(filterBooks.length ===0){
        return{
            ...state,
            totalBooks: 0,
            visibleBooks: 'No matching books found.'
        }
    }

    if(filterBooks.length != books.length && books.length === state.totalBooks ){
        state.currentPage = 1
        return{
            ...state,
            visibleBooks: filterBooks.slice(state.perPage * (state.currentPage - 1),
                state.perPage * state.currentPage),
            totalBooks: filterBooks.length,
            currentPage: 1,
            loading: false
        }
    }
    return{
        ...state,
        visibleBooks: filterBooks.slice(state.perPage * (state.currentPage - 1),
            state.perPage * state.currentPage),
        totalBooks: filterBooks.length,
    }
}

export default updateBookList;