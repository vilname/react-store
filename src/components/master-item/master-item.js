import React from 'react'


// import { goodsFilter } from '../../actions'

import './master-item.css'

// class MasterItem = ({master, onHandlerMaster}) => {
const MasterItem = ({master, onFilterGoods}) => {
  const {name, img} = master
  return(
    <div
      className="master-item"
      // onClick={filterGoodsMaster}
      onClick={onFilterGoods}
      >
      <img alt="" src={img} />
      <div>{name}</div>
    </div>
  )


    // const filtGoods = goods.filter((good) => {
    //   return id === good.master_id
    // })


  }






// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     goodsFilter: (param) => dispatch(goodsFilter(param))
//   })
// }

export default MasterItem
