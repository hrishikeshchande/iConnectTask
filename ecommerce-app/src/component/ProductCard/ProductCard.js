import { useEffect, useState } from 'react';
import './ProductCard.css';
import data from '../../../src/productData/db.json'


function ProductCard() {

    const [product, setProduct] = useState([]);
    useEffect(()=>{
        setProduct(data.products);
    })

    const handleClick = (id) => {
      window.location.href = `/products/${id}`;
    }

    return (
        <>
            <div className='container-fluid mt-3'>
                <div className='row'>
                {product.map(item => (
                            <div className='col-lg-3 col-md-4 col-sm-12 p-4' onClick={() => handleClick(item.id)}>
                                <div class="card shadow" style={{ width: '18rem', borderWidth: '0px' }}>
                                    <img src={item.thumbnail} class="card-img-top py-1" />
                                    <div class="card-body d-flex justify-content-between align-items-centers p-2">
                                        <p class="card-title fw-bolder">{item.title}</p>
                                        <p className='border-left'>Rs: {item.price}</p>
                                    </div>
                                </div>
                            </div>
                   ))}
                </div>
            </div>
        </>
    )
}
export default ProductCard;