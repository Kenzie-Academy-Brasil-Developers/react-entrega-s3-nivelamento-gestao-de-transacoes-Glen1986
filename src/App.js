import {useState} from 'react';
import Button from './components/Button';
import Ins from './components/ins';
import Outs from './components/outs';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';

function App() {

  const [isShow, setIsShow] = useState(false);
  const [products, setProducts] = useState([
    {name: "banana", quantity: 100, price: 5},
    {name: "morango", quantity: -10, price: 2},
    {name: "laranja", quantity: 50, price: 6},
  ])
  const totalPriceOut = (products.filter(item => item.quantity < 0)
    .reduce((a, b) => (a + b.price * b.quantity), 0) * -1).toLocaleString("pt-BR", {
      style: "currency", currency: "BRL"
    })

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
        {!isShow ? (
          <>
            <h3>entradas</h3>
            <Ins products={products} />
          </>
        ) : (
          <>
            <h3>Saidas</h3>
            <Outs products={products} />
          </>)}
        <Form
          isShow={isShow}
          products={products}
          setProducts={setProducts}
        /><>
          <h3>transaçoes</h3>
          <h4>Valor total de Vendas:{totalPriceOut}</h4>
          <Display listProd={products}></Display>
        </>
      </header>
    </div>
  );
}

export default App;
