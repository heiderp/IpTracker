const Button = ({
  disabled = false,
  value = '',
  children
}) => {
  const element = children ?? value
  return (
    <button
      disabled={disabled}
      type="submit"
      className="form-submit"
    >
      {element}
    </button>
  )
}

export default Button
