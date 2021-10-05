
import Display from "../Display";
const Outs = ({products}) => {
  const itemOut = products.filter((item) => item.quantity < 0);
  const quantityTotal = itemOut.reduce((acc, item) => acc + item.quantity, 0) * -1
  return (
    <>
      <div>Qantidade Total de Saidas: {quantityTotal} </div>
      <Display listProd={products.filter((item, index) => item.quantity < 0)}></Display>
    </>
  )
}
export default Outs;

