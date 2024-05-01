import { ShoppingCart } from '@phosphor-icons/react'
import { CatalogCart, CatalogMain, Container, InputCatalog } from './styles'
import { QuantitySelectorInput } from '../../../../components/QuantitySelectorInput'

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
          <span>{coffee.price.toFixed(2)}</span>
        </div>
        <InputCatalog>
          <section>
            <QuantitySelectorInput
            
            />
            <button>
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