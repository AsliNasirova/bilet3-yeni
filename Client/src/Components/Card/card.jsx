import React, { useContext } from 'react'
import "./card.scss"
import { WishlistContext } from '../../Context/WishlistContext'
import { IoMdHeart } from "react-icons/io";
import { BasketContext } from '../../Context/basketContext';
import { CiShoppingBasket } from "react-icons/ci";

const Card = ({ image, title, info, price,product, id }) => {
    const {addWish}=useContext(WishlistContext)
    const {addBasket}=useContext(BasketContext)
    return (
        <>
            <div className="cardArea">
                <div className="cardBox">
                    <div className="cardImage">
                        <img src={image} alt="" />
                    </div>
                    <div className="cardText">
                        <div className="cardInfoTitle">
                            <h2>{title}</h2>
                            <p>{info}</p>
                        </div>
                        <div className="cardPrice">
                            <p>${price}</p>
                        </div>
                    </div>
                    <div className="addWish">
                        <div onClick={()=>addWish(product)}><IoMdHeart /></div>
                    </div>
                    <div className="addBasket">
                        <div onClick={()=>addBasket(product)}><CiShoppingBasket/></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card