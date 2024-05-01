import { HTMLAttributes } from "react";
import { TextInputContainer } from "./styles";

interface TextInputProps{
  optional?: boolean;
  type?: string;
  containerProps?: HTMLAttributes<HTMLLabelElement>;
  placeholder: string;
}

export function TextInput({optional, containerProps, ...rest}: TextInputProps){
  return(
    <TextInputContainer {...containerProps}>
      <input 
        type="text" 
        {...rest}
      />
      {optional ? <span>Opcional</span> : null}
    </TextInputContainer>
  )
}