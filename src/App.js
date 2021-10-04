import {useState} from 'react';
import Button from './components/Button';
//import Input from './components/Input';
import './App.css';
import FormIn from './components/FormIn';
import FormOut from './components/FormOut';

function App() {

  const [isShow, setIsShow] = useState(false);
  const [products, setProducts] = useState([
    {name: "banana", quantity: 100, price: 5},
    {name: "morango", quantity: -10, price: 2},
    {name: "laranja", quantity: 50, price: 6},
  ])
  //  const cantidad = products.map(item => item.quantity);
  //  const precio = products.map(item => item.price);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nivelamento</h1>
        <Button
          children={!isShow ? (
            "vai pra Saidas"
          ) : (
            "vai pra Entradas"
          )}
          setIsShow={setIsShow}
          isShow={isShow}
          onClick={() => setIsShow(!isShow)} />
        {!isShow === true ? (
          <FormIn
            products={products}
            setProducts={setProducts}
          />
        ) : (
          <FormOut
            products={products}
            setProducts={setProducts}
          />
        )}

        <ul>
          <tl>{products.map(item => <tr>nome: {item.name}, </tr>)} </tl>
          <tl>{products.map(item => <tr>qtd: {item.quantity}, </tr>)} </tl>
          <tl>{products.map(item => <tr> valor: {item.price} </tr>)} </tl>
        </ul>
      </header>
    </div>
  );
}

export default App;
