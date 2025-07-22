import './App.css';
import ProductFooter from './app/products/ProductFooter';
import ProductSection from './app/products/ProductsSection';
import HeaderLayout from './components/common/HeaderLayout';

function App() {
  return (
    <div className="App">
      <div className='min-h-screen relative'>
        {/* Scrollable content area that goes under footer */}
        <div className='overflow-y-auto h-screen pb-[120px]' style={{scrollbarWidth: 'none'}}>
          <HeaderLayout />
          <ProductSection />
          <HeaderLayout />
        </div>
        
        {/* Fixed footer that overlays content */}
        <div className='fixed bottom-0 left-0 right-0 z-10'>
          <ProductFooter />
        </div>
      </div>
    </div>
  );
}

export default App;