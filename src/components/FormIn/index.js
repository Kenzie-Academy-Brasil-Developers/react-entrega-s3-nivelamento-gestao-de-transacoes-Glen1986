import {useState} from "react";
import Input from "../Input";
import Button from '../Button';
import Display from '../Display';

const FormIn = ({products, setProducts, ...rest}) => {
  const [newFruit, setNewFruit] = useState({
    name: "",
    quantity: "",
    price: "",
  })
  const [myFruit, setMyFruit] = useState({})

  const handleForm = (e) => {
    e.preventDefault();
    setProducts([
      ...products, newFruit
    ])
    setMyFruit(newFruit)
  }
  return (

    <>

      <h1>Entradas</h1>
      <form onSubmit={handleForm} >

        <Input
          {...rest}
          placeholder={"Fruta"}
          value={newFruit.name}
          onChange={(e) => setNewFruit({...newFruit, name: e.target.value})} />
        <Input
          {...rest}
          placeholder={"Qantidade"}
          value={newFruit.quantity}
          onChange={(e) => setNewFruit({...newFruit, quantity: e.target.value})} />
        <Input
          {...rest}
          placeholder={"Valor"}
          value={newFruit.price}
          onChange={(e) => setNewFruit({...newFruit, price: e.target.value})} />
        <Button
          {...rest}
          children={"entradas"}
          type={'submit'}
        />
      </form>
      <Display
        myFruit={myFruit}></Display>
    </>
  );
};
export default FormIn;
