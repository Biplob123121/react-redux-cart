import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Carts from './components/Carts';
import CartDetails from './components/CartDetails';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Carts />}></Route>
          <Route path='/cart' element={<CartDetails />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
