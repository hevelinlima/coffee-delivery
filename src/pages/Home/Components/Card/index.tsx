import { ShoppingCart } from '@phosphor-icons/react'
import { CatalogCart, CatalogMain, Container, InputCatalog } from './styles'
import { QuantitySelectorInput } from '../../../../components/QuantitySelectorInput'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'


type CardProps = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({coffee}: CardProps){
  const { addItem } = useCart()
  const [quantity, setQuantity ] = useState<number>(1);
  
  function incrementQuantity(){ 
    setQuantity((state) => state + 1)
  }

  function decrementQuantity(){
    if (quantity > 1){
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem(){
    addItem({id: coffee.id, quantity: quantity})
    setQuantity(1)
  }
 
  return (
  <>
    <Container>
      <header>
        <img src={coffee.image} alt={coffee.title} />
      </header>
      <CatalogMain>
        <div>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>
      </CatalogMain>
      <CatalogCart>
        <div>
          <p>R$</p>
          <span>{coffee.price.toFixed(2)}</span>
        </div>
        <InputCatalog>
          <section>
            <QuantitySelectorInput
              quantity={quantity}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
            <button onClick={handleAddItem}>
              <ShoppingCart 
                size={22}
                weight='fill'
                className='button-catalog'
              />
            </button>
          </section>
        </InputCatalog>
      </CatalogCart>
    </Container>
  </>
)}