import {useState} from "react";
import Input from "../Input";
import Button from '../Button';

const FormOut = ({products, setProducts, ...rest}) => {
  const [filtProd, setFiltProd] = useState({
    name: "",
    quantity: "",
  })
  const handleForm = () => {
    console.log(filtProd)
  }
  return (
    <>
      <h1>Saidas</h1>
      <form onSubmit={handleForm}>
        <Input
          value={filtProd.name}
          placeholder={"Fruta"}
          onChange={(e) => setFiltProd({...filtProd, name: e.target.value})} />
        <Input
          value={filtProd.quantity}
          placeholder={"Quantidade"}
          onChange={(e) => setFiltProd({...filtProd, quantity: e.target.value})} />
      </form>
      <Button
        children={"Saidas"}
        type={'submit'}
      />
    </>
  )
}
export default FormOut;


