import React from 'react'
import { StoreServiceConsumer } from '../storeservice-context'

const withStoreService = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    return(
      <StoreServiceConsumer>
      {
        (storeService) => {

          return(
            <Wrapped {...props} storeService={storeService} />
          )
        }
      }
      </StoreServiceConsumer>
    )
  }
}

export default withStoreService
