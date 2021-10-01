import Input from "../Input";
import Button from '../Button';

const FormOut = ({products, setProducts, ...rest}) => {
  const selFruit = () => {
    console.log("-furtas")
  }
  return (
    <>
      <h1>Saidas</h1>
      <form >
        <Input
          placeholder={"Fruta"}
          onChange={(e) => console.log(e.target.value)} />
        <Input
          placeholder={"Quantidade"}
          onChange={(e) => console.log(e.target.value)} />
      </form>
      <Button
        onClick={selFruit}
        children={"Saidas"}
        type={'submit'}
      />
    </>
  )
}
export default FormOut;


