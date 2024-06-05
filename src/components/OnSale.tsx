import styles from './OnSale.module.css'
import Header from './Header'
import Footer from './Footer'
import OnSaleCard from './OnSaleCard'
import products from '../assets/products.js'
import { useState } from 'react'

export function OnSale() {
    const onSaleProducts = products.filter((each) => each.onsale === true);
    return (
        <>
            <Header></Header>
            <main>
                <div>
                    <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
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
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export function OnSaleSlide() {
    const onSaleProducts = products.filter((each) => each.onsale === true);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(4);
    const nextSlide = () => {
        if (to < onSaleProducts.length) {
            setFrom(from + 4);
            setTo(to + 4);
        }
    };

    const prevSlide = () => {
        if (from > 0) {
            setFrom(from - 4);
            setTo(to - 4);
        }
    };
    const visibleProducts = onSaleProducts.slice(from, to);
    return (
        <>
            <div>
                <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                <div className={styles["onsale-container"]}>
                    {visibleProducts.map((each) => (
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
                <div className={styles["slider-controls"]}>
                    <button onClick={prevSlide} disabled={from === 0}>Previous</button>
                    <button onClick={nextSlide} disabled={to >= onSaleProducts.length}>Next</button>
                </div>
            </div>
        </>
    )
}