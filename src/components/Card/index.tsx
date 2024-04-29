import { ShoppingCart } from '@phosphor-icons/react'
import { CatalogCart, CatalogMain, Container, InputCatalog } from './styles'
import { QuantitySelectorInput } from '../QuantitySelectorInput'

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
          {/* {coffee.tags} */}
        </div>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>
      </CatalogMain>
      <CatalogCart>
        <div>
          <p>R$</p>
          <span>{coffee.price}</span>
        </div>
        <InputCatalog>
          <form action="">
            <QuantitySelectorInput
            
            />
            <button>
              <ShoppingCart 
                size={22}
                weight='fill'
                className='button-catalog'
              />
            </button>
          </form>
        </InputCatalog>
      </CatalogCart>
    </Container>
  </>
)}