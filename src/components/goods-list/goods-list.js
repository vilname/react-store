import React from 'react'

import GoodsListItem from '../goods-list-item'

import './goods-list.css'

const GoodsList = ({ goods, onItemSelected, onAddedToCart }) => {



  return(
    <div className="goods">
      <h2 className="title">Товары</h2>
      <div className="row">
      {
        goods.map((product) => {

          return(
            <div
              key={product.id}
              className="col-sm-3 item-goods"
              >
              <GoodsListItem
                goods={product}
                onItemSelected={() => onItemSelected(product.id)}
                onAddedToCart={() => onAddedToCart(product.id)}
              />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default GoodsList
