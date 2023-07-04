import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import { Cart } from './Cart';
import { Owner } from './Owner';
import { Total } from './components/Total';
import { Voucher } from './components/Voucher';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Owner />
        <Cart />
        <Total />
        <Voucher />
      </div>
    </Provider>
  );
}

export default App;
