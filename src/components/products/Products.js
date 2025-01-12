import React from 'react'
import "./Products.scss"
import { PRODUCTS } from '../../static'

const Products = () => {
    return (
    <div className='wrapper'>
        {
            PRODUCTS?.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.url} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.price} </p>
                    {
                        product.tags?.map((tag, inx)=> (
                            <span key={inx}>#{tag}</span>
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Products