import Display from "../Display";
const Ins = ({products}) => {
  const itemsIn = products.filter((item) => item.quantity > 0)
  const quantityTotal = itemsIn.reduce((acc, item) => {return item.quantity + acc}, 0)
  return (
    <>
      <div>Quantidade Total de Entradas: {quantityTotal}</div>
      <Display listProd={products.filter((item, index) => item.quantity > 0)}></Display>
    </>
  )
}
export default Ins;

