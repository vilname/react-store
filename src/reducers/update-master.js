const updateMaster = (state, action) => {
  if(state === undefined){
    return{
      masters: [],
    }
  }

  switch (action.type) {
    case 'FETCH_MASTER_SUCCESS':
      return{
        ...state,
        masters: action.payload,
        error: null,
        loading: true,
      }
    default:
      return state
  }
}

export default updateMaster
