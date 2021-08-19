import React, {useEffect} from 'react';
import withBookstoreService from "../hoc/with-bookstore-service";
import {bookAddedToCart, fetchBookById} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const BookPage = ({bookstoreService, match:{params}}) => {
    const bookDescription = useSelector(state => state.bookList.bookDescription);
    const loading = useSelector(state => state.bookList.loadingDescr);
    const error  = useSelector(state => state.bookList.error);

    const dispatch = useDispatch()
    console.log(params.id)
    useEffect(()=>{
        dispatch(fetchBookById(bookstoreService, params.id));
    }, [params.id])

    if(loading){
        return 'loading...'
    }
    if(error){
        return 'something happened'
    }
    const {title, author, price, coverImage, description} = bookDescription;

    return(
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <span  className="book-title">{title.length> 25 ? title.slice(0, 25)+'...' : title}</span>
                <span className="book-author">{author}</span>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-card"
                        onClick={()=>dispatch(bookAddedToCart(bookDescription.id))}>Add to cart</button>
                <div> {description}</div>
            </div>
        </div>
    )
};

export default withBookstoreService()(BookPage) ;