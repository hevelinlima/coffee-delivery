import { CartContainer, MainSection } from "./styles";
import { QuantitySelectorInput } from "../../../../components/QuantitySelectorInput";
import { Trash } from "@phosphor-icons/react";  
import { useCart } from "../../../../hooks/useCart";

type CoffeeProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartCardProps{
  coffee: CoffeeProps;
}

export function CartCard({coffee}: CartCardProps){
  const { incrementItem, decrementItem, removeItem } = useCart()

  const coffeeQuantityPrice = (coffee.price * coffee.quantity).toFixed(2)


  return(
    <CartContainer>
      <img src={coffee.image} alt="" />  
      <main>
        <h3>{coffee.title}</h3>
        <MainSection>
          <QuantitySelectorInput 
            quantity={coffee.quantity}
            incrementQuantity={()=> incrementItem(coffee.id)}
            decrementQuantity={()=> decrementItem(coffee.id)}
          />
          <button onClick={()=>removeItem(coffee.id)} className="button-remove">
            <Trash size={20}/>
            <p>REMOVER</p>
          </button>
        </MainSection>
      </main>
      <section>
        <p>R$</p>
        <span>{coffeeQuantityPrice}</span>
      </section> 
    </CartContainer>
  )
}