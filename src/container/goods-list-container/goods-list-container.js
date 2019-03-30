import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MasterList from '../../components/master-list'
import GoodsList from '../../components/goods-list'
import { storeLoaded, masterLoaded, goodsFilter, goodAddedToCart } from '../../actions'
import { withStoreService } from '../../components/hoc'

import './goods-list-container.css'

class GoodsListContainer extends Component{

  componentDidMount(){
    const { storeService } = this.props



    storeService.getAllMaster()
      .then((data) => {
        this.props.masterLoaded(data)
      })

    storeService.getAllGoods()
      .then((data) => {
        this.props.storeLoaded(data)
      })

  }


  render(){
    const { goods, masters, onFilterGoods, filter_goods, onItemSelected, onAddedToCart } = this.props

    if(goods.length <= 1){
      return false
    }

    // console.log(onAddedToCart)

      const filtGoods = goods.filter((good) => {
        return filter_goods === good.master_id
      })


    const goodsCust = filtGoods.length > 0 ? filtGoods : goods

    return (
      <React.Fragment>
        <MasterList masters={masters} onFilterGoods={onFilterGoods} />
        <GoodsList
          goods={goodsCust}
          onItemSelected={onItemSelected}
          onAddedToCart={onAddedToCart}
          />
      </React.Fragment>
      // <React.Fragment>
      //   <MasterList masters={masters} />
      //   <GoodsList goods={goods} />
      // </React.Fragment>
    )
  }
}

const mapStateToProps = ({goods, masters, filter_goods}) => {
  return{
    goods,
    masters,
    filter_goods
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    storeLoaded,
    masterLoaded,
    onFilterGoods: goodsFilter,
    onAddedToCart: goodAddedToCart
  }, dispatch)

}

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(GoodsListContainer))
