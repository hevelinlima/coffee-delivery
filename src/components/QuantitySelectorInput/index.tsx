import { Minus, Plus } from "@phosphor-icons/react";
import { InputContainer } from "./styles";
import { useState } from "react";

export function QuantitySelectorInput(){
  const [quantity, setQuantity ] = useState<number>(1);

  function incrementQuantity(){ 
    setQuantity(quantity + 1)
  }

  function decrementQuantity(){
    if (quantity > 1){
      setQuantity(quantity - 1)
    }
  }

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