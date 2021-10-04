const Display = ({myFruit}) => {
  return (
    <>
      {myFruit.length > 0 ? (
        <table>
          {console.log(myFruit)}
          {[myFruit].map((item, index) =>
            <tr key={index}>
              <td className="name">nome: {item.name}, </td>
              <td className="qtd">qtd: {item.quantity} </td>
              <td className="preco">preco: {item.price} </td>
            </tr>)}

        </table>
      ) : (
        <></>
      )}
    </>
  )
};
export default Display;
