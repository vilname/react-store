import { masters, goods } from './data.js'

export default class StoreService{

  getAllMaster(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(masters)
        // reject(new Error('что то пошло не так'))
      }, 700)
    })
  }

  getAllGoods(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(goods)
        // reject(new Error('что то пошло не так'))
      }, 700)
    })
  }

  getGoods(id){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        id = parseInt(id)
        const filtGoods = goods.filter((good) => {
          return id === good.id
        })

        
        resolve(filtGoods)
        // reject(new Error('что то пошло не так'))
      }, 700)
    })
  }
}
