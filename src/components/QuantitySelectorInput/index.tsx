import { Minus, Plus } from "@phosphor-icons/react";
import { InputContainer } from "./styles";

type QuantitySelectorProps = {
  quantity: number,
  decrementQuantity: () => void,
  incrementQuantity: () => void
}

export function QuantitySelectorInput({ quantity, decrementQuantity, incrementQuantity}: QuantitySelectorProps){
  return(
    <InputContainer>
      <button onClick={decrementQuantity} >
        <Minus size={14}/>
      </button>
      <p>{quantity}</p>
      <button onClick={incrementQuantity}>
        <Plus size={14}/>
      </button>
    </InputContainer>   
  )
}