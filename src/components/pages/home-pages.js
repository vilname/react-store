import React from 'react'
import { withRouter } from 'react-router-dom'

import GoodsListContainer from '../../container/goods-list-container'


const HomePage = ({ history, match }) => {
  // const { id } = match.params

    // console.log(id)
  return(
    <div>
      <GoodsListContainer
        onItemSelected={(id) => {
          console.log(id)
          return history.push(`${id}`)
        }}
      />
    </div>
  )
}

export default withRouter(HomePage)
