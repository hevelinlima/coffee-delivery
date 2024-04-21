import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import { DataReview, Heading, MainContainer } from "./styles";
import illustration from "../../assets/illustration.svg"
import { useTheme } from "styled-components";

export function Success(){
  const theme = useTheme()
  return(
    <>
       <Heading>
        <h1>Uhu! Pedido confirmado</h1>
        <span>
        Agora é só aguardar que logo o café chegará até você
        </span>
      </Heading>  
      <MainContainer>
        <DataReview>
        <div>
            <MapPin 
            size={30} 
            weight="fill" 
            className="icons"
            style={{ backgroundColor: theme.colors['purple'] }}/>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> 
              <br />
              Farrapos, Porto Alegre
            </p>
          </div>
          <div>
            <Timer 
            size={30} 
            weight="fill" 
            className="icons"
            style={{ backgroundColor: theme.colors['yellow'] }}/>
            <p>
              Previsão de entrega 
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <CurrencyDollarSimple 
            size={30} 
            className="icons"
            style={{ backgroundColor: theme.colors['yellow-dark'] }}/>
            <p>
              Pagamento na entrega
              <br />
              <strong>Cartão de crédito</strong>
            </p>
          </div>
        </DataReview>
        <img src={illustration } alt="" />
      </MainContainer>
    </>
  )
}