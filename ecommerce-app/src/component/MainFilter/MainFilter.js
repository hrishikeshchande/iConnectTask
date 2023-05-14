import './MainFilter.css';
import data from '../../productData/db.json'
import { useEffect, useState } from 'react';
function MainFilter() {
    const [product, setProduct] = useState([]);
    const [category,setCategory] = useState([]);
    const [productCount,setProductCount] = useState(0);

    useEffect(()=>{
        setProduct(data.products);
        setProductCount(product.length);
        let array = product.map(item=>(item.category));
        setCategory(array.filter((val,ind,self)=>self.indexOf(val)===ind));
    },[product])

    let price = [500,1000,1500];


    return (
        <><div className='container-fluid'>
            <div className="row shadow ">
                <div className="col-lg-4 col-sm-12 col-md-4 d-flex justify-content-around d-flex align-items-center my-2">
                    <div class="btn-group">
                        <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {category.map(item=>(
                            <li><a class="dropdown-item">{item}</a></li>))}
                        </ul>
                    </div>
                </div>
                <div className="border-left-right col-lg-4 col-sm-12 col-md-4 d-flex justify-content-around d-flex align-items-center my-2">
                    <div class="btn-group">
                        <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {price.map(item=>(<li><a class="dropdown-item" href="#">less than {item}</a></li>))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-4 d-flex justify-content-around d-flex align-items-center my-2">
                {productCount>0?(<h5> {productCount} Products</h5>):(<h5> 0 Products</h5>)}
                </div>
            </div>
        </div></>)
}
export default MainFilter;
