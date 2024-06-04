import styles from './OnSale.module.css'
import Header from './Header'
import Footer from './Footer'
import OnSaleCard from './OnSaleCard'
import products from '../assets/products.js'

function OnSale() {
    const onSaleProducts = products.filter((each) => each.onsale);
    return (
        <>
            <Header></Header>
            <main>
                <div className={styles["onsale-container"]}>                   
                    {onSaleProducts.map((each) => (
                    <OnSaleCard
                            key={each.id}
                            id={each.id}
                            title={each.title}
                            price={each.price}
                            color={each.colors[0]}
                            image={each.images[0]}
                        />
                    ))}
                </div>
            </main>
            <Footer></Footer>
        </>
    )

}

export default OnSale