import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { RadioContainer } from "./styles";

type RadioProps = InputHTMLAttributes<HTMLInputElement> &{
  isSelected : boolean
}

export const RadioInput = forwardRef( function RadioInput(
  {children, isSelected, ...rest}: RadioProps, 
  ref: LegacyRef<HTMLInputElement>,
){
  return(
    <RadioContainer data-state={isSelected}>
      <input 
        type="radio" 
        ref={ref}
        {...rest}
      />
        {children}
    </RadioContainer>
  )
}
  
)