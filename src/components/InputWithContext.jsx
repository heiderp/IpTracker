import { useFormContext } from "react-hook-form"
import Input from "@components/Input"

const InputWithContext = ({ name, placeholder }) => {
  const { register, errors } = useFormContext()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
      <Input isInvalid={errors?.[name]} {...register(name)} placeholder={placeholder} />
      {errors?.[name] &&
        <p className="form-error_message">
          {errors[name].message}
        </p>
      }
    </div>
  )
}

export default InputWithContext
