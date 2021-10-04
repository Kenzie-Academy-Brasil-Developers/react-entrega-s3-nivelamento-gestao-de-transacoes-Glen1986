import {useState} from "react";
import Input from "../Input";
import Button from '../Button';
import Display from "../Display";

const FormOut = ({products, setProducts, ...rest}) => {
  const [filtProd, setFiltProd] = useState({
    name: "",
    quantity: "",
  })
  const handleForm = (e) => {
    e.preventDefault();
    const entrada = filtProd.quantity;
    const aRestar = products.filter(item => item.name === filtProd.name).map(item => item.quantity)
    const total = () => {
      setProducts(entrada - aRestar)
    }
    total();

    console.log(entrada, aRestar)
  }
  return (
    <>
      <h1>Saidas</h1>
      <form onSubmit={handleForm}>
        <Input
          {...rest}
          value={filtProd.name}
          placeholder={"Fruta"}
          onChange={(e) => setFiltProd({...filtProd, name: e.target.value})} />
        <Input
          {...rest}
          value={filtProd.quantity}
          placeholder={"Quantidade"}
          onChange={(e) => setFiltProd({...filtProd, quantity: e.target.value})} />
        <Button
          {...rest}
          children={"Saidas"}
          type={'submit'}
        />
      </form>
      <Display>display</Display>
    </>
  )
}
export default FormOut;


