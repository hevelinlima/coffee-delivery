import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "@phosphor-icons/react";
import { CartTotal, CheckoutOrder, ConfirmButton, ConfirmOrder, Container, FormHeader, InfoContainer, InfoForm, PaymentForm, PaymentOptions } from "./styles";
import { useTheme } from "styled-components";
import { TextInput } from "./Components/TextInput";
import { RadioInput } from "./Components/RadioInput";
import { CartCard } from "./Components/CartCard";
import coffeeData from "../../../coffee-data.json"

export function Checkout(){
  const theme = useTheme()

  const formattedPrice = coffeeData.coffees[0].price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return(
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form action="">
          <CheckoutOrder>
            <FormHeader>
              <MapPinLine 
                size={22}
                style={{ color: theme.colors['yellow-dark'] }}/>
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </FormHeader>
            <InfoForm>
              <TextInput 
                containerProps={{ style: { gridArea: 'cep' } }}     
                placeholder="CEP"
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'street' } }}     
                placeholder="Rua"
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'number' } }}     
                type="number"
                placeholder="Número"
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'additionalAddressDetails' } }}     
                placeholder="Complemento"
                optional
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'district' } }}  
                placeholder="Bairro"
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'city' } }}  
                placeholder="Cidade"
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'state' } }}  
                placeholder="UF"
              />
            </InfoForm>
          </CheckoutOrder>
          <PaymentForm>
              <header>
                <CurrencyDollarSimple 
                  size={22} 
                  style={{ color: theme.colors['purple'] }}
                />
                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </header>
              <PaymentOptions>
                <section>
                <RadioInput 
                  isSelected={false}>
                    <div>
                      <CreditCard size={18}/>
                      <span>CARTÃO DE CRÉDITO</span>
                    </div>
                  </RadioInput>
                  <RadioInput 
                    isSelected>
                  <div>
                      <Bank size={18}/>
                      <span>CARTÃO DE DÉBITO</span>
                    </div>
                  </RadioInput>
                  <RadioInput
                    isSelected={false}>
                    <div>
                      <Money size={18}/>
                      <span>DINHEIRO</span>
                    </div>
                  </RadioInput>
                </section>
              </PaymentOptions>
            </PaymentForm> 
        </form>
      </InfoContainer>
      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <ConfirmOrder>
          <div>
            <CartCard />
            <CartCard />
          </div>
          <CartTotal>
            <div>
              <span>Total de itens</span>
              <span>R$ {(formattedPrice)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <p>Total</p>
              <p>R$ 33,50</p>
            </div>
          </CartTotal>
          <ConfirmButton>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </ConfirmOrder>
      </InfoContainer>
    </Container>
  )
}