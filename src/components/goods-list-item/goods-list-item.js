import React from 'react'

import './goods-list-item.css'

const GoodsListItem = ({goods, onAddedToCart, onItemSelected}) => {

  const { name, img, price } = goods


  return(
    <div
      className="goods-list-item"
      >
      <img alt="" src={img} onClick={ onItemSelected } />
      <div>{name}</div>
      <div>{price}</div>
      <button
        onClick={ onAddedToCart }
        className="btn btn-info add-to-cart">Купить</button>
    </div>
  )
}

export default GoodsListItem
