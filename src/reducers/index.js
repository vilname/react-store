import updateGoods from './update-product'
import updateMaster from './update-master'

const initialState = {
  masters: [],
  goods: [],
  filter_goods:[],
  loading: true,
  cartItems:[],
  orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {



  if(item.count === 0){
    return[
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx+1)
    ]
  }

  if(idx === -1){
    return[
      ...cartItems,
      item
    ]
  }

  return[
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx+1)
  ]
}

const updateCartItem = (product, item = {}, quantity) => {



  const {
    id = product.id,
    count = 0,
    title = product.title,
    total = 0
  } = item

  return{
    id,
    title,
    count: count + quantity,
    total: total + quantity*product.price
  }
}

const updateOrder = (state, productId, quantity) => {
  // const productId = action.payload

  const { goods, cartItems } = state

  const product = goods.find((product) => product.id === productId)
  const itemIndex = cartItems.findIndex(({id}) => id === productId)
  const item = cartItems[itemIndex]

  const newItem = updateCartItem(product, item, quantity)

  // console.log(product.price)
  // console.log(quantity)
  return{
    ...state,
    cartItems:updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: state.orderTotal + product.price * quantity
  }
}

const reducer = (state = initialState, action) => {

  // console.log(updateGoods(state, action))
  // console.log(updateMaster(state, action))

  // console.log(action)

  // return{
  //   catalog: updateGoods(state, action),
  //   masters: updateMaster(state, action)
  // }

  // console.log(action.type)

  switch (action.type) {
    case 'FETCH_GOODS_REQUEST':
      return{
        ...state,
        goods: [],
        loading: true,
        error: null
      }
    case 'FETCH_GOODS_SUCCESS':


      return{
        ...state,
        goods: action.payload,
        loading: false,
        error: null
      }
    case 'FIlTER_GOODS_MASTER':
      return{
        ...state,
        filter_goods: action.payload,
        loading: true,
        error: null
      }
    case 'FETCH_MASTER_SUCCESS':
      return{
        ...state,
        masters: action.payload,
        error: null,
        loading: true,
      }
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1)
    case 'ALL_BOOK_REMOVED_FROM_CART':
      const item = state.cartItems.find(({id}) => id === action.payload)
      return updateOrder(state, action.payload, -item.count)
    default:
      return state
  }

}



export default reducer
