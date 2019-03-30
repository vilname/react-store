import React from 'react'
import { connect } from 'react-redux'

import {
  goodAddedToCart,
  goodsRemovedFromCart,
  allGoodsRemovedFromCart
} from '../../actions'

import './basket-table.css'

const BasketTable = ({items, total, onIncreace, onDecreace, onDelete }) => {

  const renderRow = (item, idx) => {

    const { id, title, count, total } = item

    return(
      <tr key={id}>
        <td>{idx+1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncreace(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecreace(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }

  return(
    <div className="basket-table">
      <h2>Корзина</h2>
      <table className="basket-table__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Всего {total}
      </div>
    </div>
  )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
  return{
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = {

  onIncreace: goodAddedToCart,
  onDecreace: goodsRemovedFromCart,
  onDelete: allGoodsRemovedFromCart

}

export default connect(mapStateToProps, mapDispatchToProps)(BasketTable)
