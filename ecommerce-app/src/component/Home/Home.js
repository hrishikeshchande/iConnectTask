
import Navbar from '../navbar/Navbar';
import ProductCard from '..//ProductCard/ProductCard';
import MainFilter from '..//MainFilter/MainFilter';
import Topbanner from '../../share/Topbanner/Topbanner';
function Home() {
    return (
        <>
            <Navbar />
            <Topbanner />

            <MainFilter />

            <ProductCard />

            {/* <ProductDetail/> */}
        </>
        )
}
export default Home;