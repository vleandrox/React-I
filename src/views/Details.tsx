import styles from './Details.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import products from '../assets/products.js'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound.js'
// import ProductCard from '../components/ProductCard.js'
import Thumbs from '../components/Thumbs.js'
import Description from '../components/Description.js'
import Checkout from '../components/Checkout.js' 
import { OnSaleSlide } from '../components/OnSale.js'

function Details() {   
    const { id } = useParams();
    const product = products.find((each) => each.id == id);
    // const onsale = products.filter((each) => each.onsale).slice(0, 3);
    if (product) {
        return (
            <>
                <Header></Header>
                <main>
                    <div className={styles["details-container"]}>
                        {product && (
                            <div id="details" className={styles["columns-container"]}>
                                <Thumbs product={product} />
                                <Description product={product} />
                                <Checkout product={product} />
                            </div>
                        )}                        
                        <OnSaleSlide></OnSaleSlide>
                        {/* <div className={styles["sales-block"]}>
                            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                            <div id="product-container" className={styles["product-container"]}>
                                {onsale.map((each) => (
                                    <ProductCard
                                        key={each.id}
                                        id={each.id}
                                        title={each.title}
                                        price={each.price}
                                        color={each.colors[0]}
                                        image={each.images[0]}
                                    />
                                ))}
                            </div>
                        </div> */}
                    </div>
                </main>
                <Footer></Footer>
            </>
        )

    }
    else {
        return (<>
            <NotFound />
        </>)

    }
    return (<>
    </>);
}

export default Details
