import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import { Cart } from '../features/cart/Cart';
import { Total } from '../features/total/Total';
import { Voucher } from '../features/voucher/Voucher';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
        <Total />
        <Voucher />
      </div>
    </Provider>
  );
}

export default App;
