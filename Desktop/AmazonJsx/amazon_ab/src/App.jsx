import CarouselEffect from "./components/CarouselEffect/CarouselEffect"
import Category from "./components/Category/Category"
import CategoryCard from "./components/Category/CategoryCard"
import Header from "./components/Header/Header"
import LowerHeader from "./components/LowerHeader/LowerHeader"
import Product from "./components/Product/Product"
// import ProductCard from "./components/Product/ProductCard"

function App() {
 

  return (
    <>
      <Header/>
      <LowerHeader />
      <CarouselEffect />
      <Category />
      <CategoryCard />
      <Product />
      {/* <ProductCard /> */}
    </>
  )
}

export default App
