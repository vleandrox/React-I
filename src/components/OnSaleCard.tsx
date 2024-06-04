import styles from './OnSaleCard.module.css'

function OnSaleCard(props) {
    const {title, color, price, image,onsale } = props
    return (
        <>
            <div className={styles["card"]}>
                <img className={styles["product-img"]} src={image} alt="Kit Stanley Termo y Mate" />
                <div className={styles["card-content"]}>
                    <h3>{title} + {color}</h3>
                    <p className={styles["old-price"]}>Desde AR$ 104.860</p>
                    <p className={styles["new-price"]}>$.{price} <span className={styles["discount"]}>35% OFF</span></p>
                    <p className={styles["promo"]}>¡Comprá y pagá en pesos! {onsale}</p>
                </div>
            </div>
        </>
    )
}

export default OnSaleCard