import React from "react";
import './shop-header.css'
import {Link} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {setCurrentPage} from "../../actions";

const ShopHeader =({countItems, orderTotal} = this.props)=>{

    const dispatch = useDispatch()
    return(
        <header className="shop-header row">
            <Link to="/page/1/"
                onClick={()=>dispatch(setCurrentPage(1))}>
                <div className="logo text-dark" href="#">Restore</div>
            </Link>
            <Link to = "/card">
                <div className="shopping-cart">
                    <i className="cart-icon fas fa-shopping-cart"></i>
                    {countItems} items (${orderTotal})
                </div>
            </Link>

        </header>
    )
}

const mapStateToProps = ({shoppingCart: {orderTotal, countItems}})=>{
    return{
        orderTotal,
        countItems

    }
}


export default connect(mapStateToProps)(ShopHeader);