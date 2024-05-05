import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import { DataReview, Heading, MainContainer } from "./styles";
import illustration from "../../assets/illustration.svg"
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export function Success(){
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderData = orders.find((order) => order.id === Number(orderId));
  if (!orderData) {
    throw new Error('Não foi possível prosseguir')
  }

  const paymentOption = {
    debit: "Cartão de débito",
    credit: "Cartão de crédito",
    cash: "Dinheiro"
  }
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
              Entrega em <strong>{orderData?.street}, {orderData?.number}</strong> 
              <br />
              {orderData?.city}, {orderData?.state}
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
              <strong>{paymentOption[orderData.paymentOption]}</strong>
            </p>
          </div>
        </DataReview>
        <img src={illustration } alt="" />
      </MainContainer>
    </>
  )
}