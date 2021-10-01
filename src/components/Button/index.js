const Button = ({onClick, children, ...rest}) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  )
}
export default Button;

