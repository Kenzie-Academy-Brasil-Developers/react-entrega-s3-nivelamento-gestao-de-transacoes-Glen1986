const Display = ({myFruit}) => {
  return (
    <>
      {[myFruit].length >= 1 ? (
        <table>
          {[myFruit].map((item, index) =>
            <tr key={index}>
              <td className="name">nome: {item.name}, </td>
              <td className="qtd">qtd: {item.quantity} </td>
              <td className="preco">preco: {item.price} </td>
            </tr>)}

        </table>

      ) : (
        <div></div>
      )}
    </>
  )
};
export default Display;
