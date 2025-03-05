import Header from '../src/components/Header/Header';
import './App.css';
import LowerHeader from '../src/components/LowerHeader/LowerHeader';
import CarouselEffect from './components/CarouselEffect/CarouselEfffect';
// import CategoryCard from './components/Category/CategoryCard';




function App() {
  return (
    <div className="App">
       <Header />
       <LowerHeader/>
       <CarouselEffect/>
       {/* <CategoryCard /> */}
    </div>
  );
}

export default App;
