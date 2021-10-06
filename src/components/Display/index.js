import {Container} from './styles'
const Display = ({listProd}) => {
  return (
    <Container>
      {listProd ? listProd.map((item, index) => (
        <tr key={index} >
          <td className="name"> nome: {item.name} </td>
          <td className="qtd"> qtd: {item.quantity}  </td>
          <td className="preco"> preco: {item.price} </td>
        </tr>
      )) : (
        <></>
      )}
    </Container>
  )
};
export default Display;
