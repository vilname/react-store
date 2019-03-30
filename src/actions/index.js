const storeLoad = () => {
  return{
    type: 'FETCH_GOODS_REQUEST',
  }
}
const storeLoaded = (newGoods = []) => {

  return{
    type: 'FETCH_GOODS_SUCCESS',
    payload: newGoods
  }
}

const masterLoaded = (newMaster = []) => {
  return{
    type: 'FETCH_MASTER_SUCCESS',
    payload: newMaster
  }
}

const goodsFilter = (idMaster) => {
  return{
    type: 'FIlTER_GOODS_MASTER',
    payload: idMaster
  }
}

const goodAddedToCart = (goodId) => {
  return{
    type: 'BOOK_ADDED_TO_CART',
    payload: goodId
  }
}

const goodsRemovedFromCart = (goodId) => {
  return{
    type: 'BOOK_REMOVED_FROM_CART',
    payload: goodId
  }
}

const allGoodsRemovedFromCart = (goodId) => {
  return{
    type: 'ALL_BOOK_REMOVED_FROM_CART',
    payload: goodId
  }
}

export{
  storeLoaded,
  masterLoaded,
  goodsFilter,
  storeLoad,
  goodAddedToCart,
  goodsRemovedFromCart,
  allGoodsRemovedFromCart
}
