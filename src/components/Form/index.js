import {useState} from "react";
import Input from "../Input";
import Button from '../Button';

const Form = ({products, setProducts, isShow}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addFruit = (name, quantity, price) => {
    const newFruit = {
      name: name,
      quantity: Number(quantity),
      price: Number(price)
    }
    setProducts([...products, newFruit]);
  }
  return (
    <>
      <div>
        <Input
          placeholder={"fruta"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />      <Input
          placeholder={"quantidade"}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />      <Input
          placeholder={"preco"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button
          children={isShow ? (
            "add"
          ) : (
            "off"
          )}
          onClick={() => addFruit(name, quantity, price)}
        />

      </div>
    </>
  )
}
export default Form;
