import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import "./product.scss"
import { LuDessert } from "react-icons/lu";


const Product = () => {
    const [product, setProduct] = useState()
    async function getProducts() {
        const data = await fetch("http://localhost:3000")
        const res = await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <section id='product'>
                <div className="productArea">
                    <div className="titleDessert">
                    <div className="titleProduct">
                        <p>Our Menu</p>
                        <h1>
                            Discover Our Exclusive Menu
                        </h1>
                    </div>
                    <div className="dessertContainer">
                        <div className="dessert"><LuDessert /> Dessert</div>
                        <div className="dessert"><LuDessert /> Dessert</div>
                        <div className="dessert"><LuDessert /> Dessert</div>
                    </div>
                </div>
                    <div className="productCard">

                        {product && product.map((item) => (
                            <Card key={item._id} id={item._id} image={item.image} title={item.title} info={item.info} price={item.price} product={item} />
                        ))}

                        
                    </div>
                    <div className="cardEnd">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores ut, eaque praesentium ea nisi.</p>
                            <div className="cardButton"><button className='cardbtn'>Make a reservation</button></div>
                        </div>
                </div>

            </section>

        </>
    )
}

export default Product