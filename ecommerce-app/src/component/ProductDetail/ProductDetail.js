import { Link, useParams } from 'react-router-dom';
import banner from '../../assets/banner.png';
import data from '../../../src/productData/db.json'
import './ProductDetail.css';
import Navbar from '../navbar/Navbar';
import { useEffect, useState } from 'react';
function ProductDetail() {
  const { productId } = useParams();
  const product = data.products.find(item => item.id === parseInt(productId));
console.log(product);


  let [quentity,setQuantity]=useState(1);
  let [totalPrice, setTotalPrice]=useState();
  const [mainImg, setMainImg] = useState(product.thumbnail);

  const quentityFn=(type)=>{
    console.log(type)
    type=='inc'? setQuantity(++quentity) : setQuantity(--quentity);
  }
  
  useEffect(()=>{
    let price = product.price;
    setTotalPrice(price*quentity);
  },[quentity]);

  const setAsMainImg = (imgUrl) => {
    setMainImg(imgUrl);
  }
    return (
        <>
        <Navbar/>
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='d-flex align-items-center justify-content-center main-product-img'>
              <img src={mainImg} className='img-fluid main-img' />
            </div>
            {product.images.length>1?
            (<div className='row mt-3'>
              {product.images.slice(0, 3).map(imgUrl=>(
              <div className='col-4'>
                <img src={imgUrl} className='img-thumbnail sub-product-img' onClick={()=>setAsMainImg(imgUrl)}/>
              </div>
              ))}
            </div>):
            (null)
            }
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 py-4 px-5 product-details'>
              <h1>{product.title}</h1>
              <div className='flex-row mt-2'>
                <h5>Price:</h5>
                <p className='px-4'>{product.price}</p>
              </div>
              <h5 className='p-0 m-0'>Description:</h5>
              <p className='px-5'>{product.description}</p>
              <div className='row gray-box p-3'>
                <div className='col-lg-5 col-sm-12 flex-row'>
                  <button type="button" class="btn btn-danger m-1"  onClick={()=>quentityFn('dec')} disabled={quentity === 1}>-</button>
                  <input type="email" class="form-control m-1 text-center" value={quentity}/>
                  <button type="button" class="btn btn-success m-1" onClick={()=>quentityFn('inc')}>+</button>
                </div>
                <div className='col-lg-6 col-sm-12 flex-row text-gray flex-align-center'>
                  <h5>Total:</h5><h3 className='mx-2'>Rs: {totalPrice}</h3>
                </div>
                <div class="col-12 mt-4 d-grid mx-auto">
                  <button type="button" class="btn btn-warning">Add to Cart</button>
                </div>
              </div>
              <div className='row '>
                <div class="col-12 mt-4 d-grid mx-auto float-end">
                  <Link to='/'>
                  <button type="button" class="btn btn-outline-info ">All Products</button>
                  </Link>
                </div>
                </div>
          </div>
        </div>
      </div>
        </>
    )}

export default ProductDetail;

