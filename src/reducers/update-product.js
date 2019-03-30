const updateGoods = (state, action) => {

// console.log(state === undefined)

  if(state === undefined){
    return{
      goods: [],
      filter_goods:[],
      loading: true,
    }
  }

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

    default:
      return state
  }
}

export default updateGoods
