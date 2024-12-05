import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/context/CartContext';
import './style.css';


ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
