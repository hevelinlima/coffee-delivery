import { Card } from "../../components/Card";
import { CoffeeList, HeaderSection, HomeContainer, ItemsContainer } from "./styles";
import imageMain from '../../assets/image-main.svg'
import { ShoppingCart, Coffee, Package, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";


export function Home(){
  const theme = useTheme()
  return(
    <>
      <HomeContainer>
        <div>
          <HeaderSection>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </HeaderSection>

          <ItemsContainer>
            <div>
              <ShoppingCart 
              size={30} 
              weight="fill" 
              className="icon-background"
              style={{ backgroundColor: theme.colors['yellow-dark'] }}
               />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package 
              size={30} 
              weight="fill" 
              className="icon-background"
              style={{ backgroundColor: theme.colors['base-text'] }}/>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer 
              size={30} 
              weight="fill" 
              className="icon-background"
              style={{ backgroundColor: theme.colors['yellow'] }}/>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee 
              size={30} 
              weight="fill" 
              className="icon-background"
              style={{ backgroundColor: theme.colors['purple'] }}/>
              <span>O café chega fresquinho até você</span>
            </div>
          </ItemsContainer>
        </div>
        <img src={ imageMain} alt="" />
      </HomeContainer>
      <CoffeeList>
        <h1>Nossos cafés</h1>
        <Card />
      </CoffeeList>
    </>
  )
}