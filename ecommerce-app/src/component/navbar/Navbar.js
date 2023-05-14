import { FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import data from '../../../src/productData/db.json'
import { useEffect, useState } from "react";
import './Navbar.css'

function Navbar() {
    let [cartCount, setCartCount] = useState();
    let [search, setSearch ] = useState(false);

    useEffect(()=>{
        setCartCount(data.cart.length);
    },[cartCount])
    const showSearch=()=>{
        setSearch(!search);
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
                <div class="container-fluid">
                    <a class="navbar-brand">
                        <Link to="/">
                            <img src={logo} alt="" width="60" height="50" />
                        </Link>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link "><Link to="/" className="my-link">Home</Link></a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <ul class="navbar-nav">
                                {search&&<li class="nav-item">
                                    <form class="d-flex">
                                        <input class="form-control me-2" type="search"placeholder="Search" aria-label="Search"/>
                                    </form>
                                </li>}
                                <li class="nav-item">
                                    <div class="nav-link" onClick={()=>{showSearch()}}><FaSearch /></div>
                                </li>
                                <li class="nav-item">
                                    <div class="position-relative nav-link">
                                    <FaCartPlus/>
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                        {cartCount}
                                        </span>
                                        </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Account</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;