import React from 'react'

import MasterItem from '../master-item'

import './master-list.css'

const MasterList = ({masters, onFilterGoods}) => {

  // console.log(onHandlerMaster)



  return(
    <div>
      <h2>Мастера</h2>
      <div className="row">
      {
        masters.map((master) => {
          return(
            <div key={master.id} className="col-sm-3">
              <MasterItem master={master} onFilterGoods={() => onFilterGoods(master.id)} />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default MasterList
