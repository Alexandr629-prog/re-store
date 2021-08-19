import React from "react";
import BookList from "../book-list";

import ShoppingCartTable from "../shopping-cart-table";
import SearchPanel from "../search-panel";
import Pagination from "../pagination";

const HomePage =(props)=>{
    return (
        <div>
            <SearchPanel/>
            <BookList details ='foo'/>
            <Pagination onPageSelected ={(page)=>props.history.push(page)}/>
            <ShoppingCartTable/>


        </div>
    )

}

export default HomePage