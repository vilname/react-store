import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header.css'

const Header = ({cartItems, orderTotal}) => {


  return(
    <div className="header-container">
      <Link to="/">
        <span>Логотип</span>
      </Link>
      <Link to="/cart" >
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {cartItems.length} items (${orderTotal})
      </div>
      </Link>
    </div>
  )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
  return {
    cartItems,
    orderTotal
  }
}

export default connect(mapStateToProps)(Header)
