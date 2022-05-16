import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails'
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:pid' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
       
    </>
  );
}

export default App;
