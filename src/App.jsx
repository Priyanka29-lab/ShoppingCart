import Product from './Components/Product';
import Bag from './pages/Bag';
import Home from './pages/home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';


const App = () => {
  return (
  <>
     <Home/>
     <Register/>
    <Login />
    <Product/>
    <ProductList/>
    <Bag/>
  </>
  );
} 

export default App;
