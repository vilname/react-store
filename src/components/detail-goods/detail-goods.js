import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStoreService } from '../hoc'
import { storeLoaded, goodAddedToCart } from '../../actions'

import './detail-goods.css'

class DetailGoods extends Component {

  componentDidMount(){
    this.updateItem()
  }

  updateItem(){
    const { itemId, storeService, storeLoaded } = this.props

    if(!itemId){
      return
    }

    // console.log(this.props)

    storeService.getGoods(itemId)
      .then((goods) => {
        storeLoaded(goods)
      })
  }

  render(){

    const { props, onAddedToCart} = this.props

    const goods = props.goods

    if(goods.length > 1){
      return false
    }

    var good = {}

    for (var val of goods) {
        good = val;
    }

    const { id, name, img, price } = good


    return(
      <div className="detail-page">
        <img src={img} />
        <div className="detail-page__info">
          <div>{name}</div>
          <div>{price} руб.</div>
          <button
            onClick={() => onAddedToCart(id)}
            className="btn btn-info add-to-cart">Купить</button>
        </div>

      </div>
    )
  }


}

// const mapMethodToProps = (storeService) => {
//   console.log(storeService)
//   return{
//     getData: storeService.getGoods
//   }
// }

const mapStateToProps = (props) => {
  return {
    props
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    storeLoaded,
    onAddedToCart: goodAddedToCart
  }, dispatch)
}

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(DetailGoods))
