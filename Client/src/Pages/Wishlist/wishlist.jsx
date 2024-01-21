import React, { useContext } from 'react'
import './wishlist.scss'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../Context/WishlistContext'

const Wishlist = () => {
const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
        <Helmet>
            <title>Wishlist Page</title>
        </Helmet>
        <div className='wishlistArea'>
            {wish && wish.map(x=>
                <ul className='textWishlist'>
                    <li><img src={x.image} alt="" /></li>
                    <li><h1>{x.title}</h1></li>
                    <li><p>{x.info}</p></li>
                    <li><p>{x.price}</p></li>
                    <li><button onClick={()=>deleteWish(x)}>deleteWish</button></li>
                </ul>
                )}
        </div>
    
    </>
  )
}

export default Wishlist