import { HTMLAttributes, InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { TextInputContainer } from "./styles";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> &{
  optional ?: boolean;
  containerProps?: HTMLAttributes<HTMLLabelElement>
}

export const TextInput = forwardRef(function TextInput(
  {optional, containerProps, ...rest}: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
){
  return(
    <TextInputContainer {...containerProps}>
      <input 
        type="text" 
        ref={ref}
        {...rest}
      />
      {optional ? <span>Opcional</span> : null}
    </TextInputContainer>
  )
})