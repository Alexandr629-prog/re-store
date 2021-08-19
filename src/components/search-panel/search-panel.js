import React from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {bookAddedToCart, fetchBooks, searchBookByName, titleBookToSearch} from "../../actions";
import withBookstoreService from "../hoc/with-bookstore-service";

const SearchPanel = ({ bookstoreService} = this.props)=>{
    const visibleBooks = useSelector(state => state.bookList.visibleBooks);

    const currentPage = useSelector(state => state.bookList.currentPage);
    const dispatch = useDispatch();
    const term = useSelector(state => state.bookList.term);

    const debounce = (fn, ms) => {
        let timeout;
        return function () {
            const fnCall = () => { fn.apply(this, arguments) }
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms)
        };
    }


    return (
        <input type="text"
               className="form-control search-input"
               placeholder='Enter the title for search book'
               value={term}
               onChange={ (event)=> {
                   debounce(dispatch(titleBookToSearch(event.target.value)), 5000)()
                   dispatch(fetchBooks(bookstoreService, visibleBooks, currentPage, event.target.value));
               } }
                />
    );
};

const mapStateToProps =({bookList: {term}})=>{
    return{
        term
    }
};

const mapDispatchToProps ={
    onTermChange: searchBookByName
}

export default withBookstoreService()(connect()((SearchPanel)));