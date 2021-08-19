import React from 'react';
import './shopping-cart-table.css';
import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart} from "../../actions";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete, currentPage}) => {

  const renderRow = (item, idx)=>{
    const {id, title, count, total } = item;
    console.log(currentPage);
    return(
        <tr key={id}>
          <td>{idx+1}</td>
          <td><Link to={`/page/${currentPage}/${title}/${id}`}>{title}</Link></td>
          <td>{count}</td>
          <td>${total}</td>
          <td>
            <button className="btn btn-outline-danger btn-sm float-right"
                    onClick={()=>onDelete(id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <button className="btn btn-outline-success btn-sm float-right"
                    onClick={()=>onIncrease(id)}>
              <i className="fa fa-plus-circle" />
            </button>
            <button className="btn btn-outline-warning btn-sm float-right"
                    onClick={()=>onDecrease(id)}>
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead key={1}>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        {
          items.map(renderRow)
        }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps =({shoppingCart, bookList})=>{
  return {
   items: shoppingCart.cartItems,
   total: shoppingCart.orderTotal,
   currentPage: bookList.currentPage
  }
}

const mapDispatchToProps = {
        onIncrease: bookAddedToCart,
        onDecrease: bookRemoveFromCart,
        onDelete: allBooksRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
