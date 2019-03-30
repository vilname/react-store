import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import GoodsListContainer from '../goods-list'
import DetailGoods from '../detail-goods'
import { HomePage, BasketPage } from '../pages'
import Header from '../header'

import './app.css'

const App = () => {
  return(
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={BasketPage} />
        <Route path="/:id"
          render={({match}) => {
            const { id } = match.params
            return <DetailGoods itemId={id} />
          }}
        />

      </Switch>
    </div>
  )
}

export default App
