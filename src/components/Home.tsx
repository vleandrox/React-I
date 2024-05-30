import styles from './Home.module.css'
import Header from './Header'
import Hero from './Hero'
import ProductCard from './ProductCard'
import Footer from './Footer'
import products from '../assets/products.js'

function Home() {
    return (
        <>
            <Header></Header>
            <Hero first={"Tecnologia"} second={"Renovada"}></Hero>
            <main>
                <div className={styles["product-container"]} id="products">
                    {products.map((each) => (
                        <ProductCard
                            key={each.id}
                            id={each.id}
                            title={each.title}
                            price={each.title}
                            color={each.colors[0]}
                            image={each.images[0]}
                        />
                    ))}                    
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home