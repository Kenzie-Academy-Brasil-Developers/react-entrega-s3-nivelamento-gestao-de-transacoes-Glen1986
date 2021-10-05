const Display = ({listProd}) => {
  return (
    <>
      {listProd ? listProd.map((item, index) => (
        <tr key={index} >
          <td className="name">nome: {item.name}  </td>
          <td className="qtd">qtd: {item.quantity}  </td>
          <td className="preco">preco: {item.price}  </td>
        </tr>
      )) : (
        <div>lista vazia</div>
      )}
    </>
  )
};
export default Display;
