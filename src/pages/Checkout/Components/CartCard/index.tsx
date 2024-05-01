import { CartContainer, MainSection } from "./styles";
import coffeeData from "../../../../../coffee-data.json"
import { QuantitySelectorInput } from "../../../../components/QuantitySelectorInput";
import { Trash } from "@phosphor-icons/react";

export function CartCard(){
  return(
    <CartContainer>
      <img src={coffeeData.coffees[0].image} alt="" />  
      <main>
        <h3>{coffeeData.coffees[0].title}</h3>
        <MainSection>
          <QuantitySelectorInput />
          <button className="button-remove">
            <Trash size={20}/>
            <p>REMOVER</p>
          </button>
        </MainSection>
      </main>
      <section>
        <p>R$</p>
        <span>{coffeeData.coffees[0].price.toFixed(2)}</span>
      </section> 
    </CartContainer>
  )
}