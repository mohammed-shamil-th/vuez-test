import './App.css';
import ProductSection from './components/common/app/products/ProductsSection';
import HeaderLayout from './components/common/HeaderLayout';

function App() {
  return (
    <div className="App">
      <div className='min-h-screen flex flex-col justify-between'>
      <HeaderLayout />
      <ProductSection />
      <HeaderLayout />
</div>
    </div>
  );
}

export default App;
