import { ReactNode } from "react";
import { RadioContainer } from "./styles";

interface RadioProps{
  children ?: ReactNode
  isSelected : boolean
}

export function RadioInput({children, isSelected, ...rest}: RadioProps){

  return(
    <RadioContainer data-state={isSelected}>
      <input 
        type="radio" 
        {...rest}
      />
        {children}
    </RadioContainer>
  )
}