
const Input = ({onChange, value, type, ...rest}) => {
  return (
    <>
      <input
        {...rest}
        onChange={onChange}
        value={value}
        type={type} />
    </>

  )
}
export default Input;
