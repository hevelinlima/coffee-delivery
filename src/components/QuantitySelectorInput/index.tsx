import { Minus, Plus } from "@phosphor-icons/react";
import { InputContainer } from "./styles";

export function QuantitySelectorInput(){
  return(
    <InputContainer>
      <button>
        <Minus size={14}/>
      </button>
      <p>01</p>
      <button>
        <Plus size={14}/>
      </button>
    </InputContainer>   
  )
}