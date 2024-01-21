import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'

const Basket = () => {
  const{basket,deleteBasket,increaseBasket,decreaseBasket}=useContext(BasketContext)

  return (
    <div className='basketArea'>
      {basket&&basket.map(x=>
      <ul className='textBasket'>
        <li><img src={x.image} alt="" /></li>
        <li><h3>{x.title}</h3></li>
        <li><p>{x.info}</p></li>
        <li><p>{x.price}</p></li>
        <li><button className='deleteBasketBtn' onClick={()=>deleteBasket(x)}>Delete</button></li>
        
        <li><button className='inreaseDecrease_btn' onClick={()=>increaseBasket(x)}>+</button></li>
        <p>{x.count}</p>
        <li><button className='inreaseDecrease_btn' onClick={()=>decreaseBasket(x)}>-</button></li>
</ul>
        )}

    </div>
  )
}

export default Basket