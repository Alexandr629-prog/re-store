import React  from "react";
import connect from "react-redux";
import {NavLink} from "react-router-dom";

import './book-list-item.css'

const BookListItem = ({book, onAddToCart} = this.props)=>{


    const {title, author, price, coverImage, id} = book;
    return(
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>

            </div>
            <div className="book-details">
                <NavLink to ={`${title}/${id}`}  className="book-title">{title.length> 25 ? title.slice(0, 25)+'...' : title}</NavLink>
                <span className="book-author">{author}</span>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-card"
                onClick={onAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;