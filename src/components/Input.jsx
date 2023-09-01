import clsx from 'clsx'
import { forwardRef } from 'react'

const Input = forwardRef(({ isInvalid, ...props }, ref) => {
  const inputStyle = clsx({
    "form-input": true,
    'form-input-invalid': isInvalid
  })

  return (
    <input
      ref={ref}
      type="text"
      className={inputStyle}
      {...props}
    />
  )
})
export default Input

