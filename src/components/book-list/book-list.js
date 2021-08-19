import React, {Component, useEffect} from "react";
import BookListItem from "../book-list-item";
import './book-list.css'
import {connect, useDispatch, useSelector} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {bindActionCreators} from "redux";
import {fetchBooks, bookAddedToCart, fetchBooksOld, setTotalBooks} from "../../actions";

import compose from "../../utils";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({visibleBooks, onAddToCart})=>{
    const dispatch = useDispatch()
    if(typeof visibleBooks !== 'object'){
        return <span className='book-list-not-found'>{visibleBooks}</span>;
    }
    return (
        <ul className="book-list">
            {
                visibleBooks.map((book)=>{
                    return <li key={book.id}><BookListItem book={book} onAddToCart={()=>dispatch(bookAddedToCart(book.id))}/> </li>
                })
            }
        </ul>
    )
}

const  BookListContainer = ({bookstoreService})=>{
    const dispatch  = useDispatch();
    const visibleBooks = useSelector(state => state.bookList.visibleBooks);
    const loading = useSelector(state => state.bookList.loading);
    const error = useSelector(state => state.bookList.error);
    const perPage = useSelector(state => state.bookList.perPage);
    const currentPage = useSelector(state => state.bookList.currentPage);
    const term = useSelector(state => state.bookList.term);
    const addToCart = dispatch(bookAddedToCart);

    useEffect(()=>{

        dispatch(fetchBooks(bookstoreService, visibleBooks, currentPage, term))

    }, [ currentPage ])



    // componentDidMount() {
    //     //1 receive data
    //     //2 dispatch data to store
    //     this.props.fetchBooks();
    // }



    //render() {
        //const {visibleBooks, loading, error, addToCart} = this.props;
        if(loading){
            return <Spinner/>;
        }
        if(error){
            return <ErrorIndicator/>;
        }
        return <BookList visibleBooks={visibleBooks} onAddToCart={addToCart}/>
    //}
}

const mapStateToProps = ({bookList: {visibleBooks, loading, error}})=> {
    return {visibleBooks, loading, error}
};

const mapDispatchToProps = (dispatch, ownProps)=> {
    const { bookstoreService } = ownProps;
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        addToCart: bookAddedToCart
    }, dispatch)
}

export default compose(
    withBookstoreService(),
    //connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

