import { Bank, CreditCard, CurrencyDollarSimple, MapPinLine, Money } from "@phosphor-icons/react";
import { CartTotal, CheckoutOrder, ConfirmButton, ConfirmOrder, Container, FormHeader, InfoContainer, InfoForm, PaymentForm, PaymentOptions } from "./styles";
import { useTheme } from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { TextInput } from "./Components/TextInput";
import { RadioInput } from "./Components/RadioInput";
import { CartCard } from "./Components/CartCard";
import { useCart } from "../../hooks/useCart";
import { coffees } from "../../../coffee-data.json"

type OrderInputs = {
  cep: number,
  street: string,
  number: number,
  additionalDetails: string,
  district: string,
  city: string,
  state: string,
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe seu CEP'),
  street: zod.string().min(1, 'Informe sua rua'),
  number: zod.number().min(1, 'Informe o número da sua casa'),
  additionalDetails: zod.string().optional(),
  district: zod.string().min(1, 'Informe seu bairro'),
  city: zod.string().min(1, 'Informe sua cidade'),
  state: zod.string().min(1, 'Informe sua UF').max(2 ,'Adicione apenas a sigla do seu estado'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'])
})

export type OrderInfo = zod.infer<typeof newOrderFormValidationSchema>

// const shippingPrice = 3.5

export function Checkout(){
  const theme = useTheme()
  const { cart, checkout } = useCart()

  const formattedPrice = coffees[0].price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const { register, handleSubmit, watch } = useForm<OrderInputs>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const selectedPaymentMethod = watch('paymentMethod')

  const handleConfirmOrder: SubmitHandler<OrderInputs> = (orderData) => {
    if (cart.length === 0) {
      return alert('Adicione pelo menos um item ao carrinho')
    }
    checkout(orderData)
  }

  const cartTotal = cart.map((item)=>{
    const coffeeData = coffees.find((coffee)=>{return coffee.id === item.id});
    if (!coffeeData) {
      throw new Error('Invalid coffee.')
    }
    return {
      ...coffeeData,
      quantity: item.quantity
    }
    } 
  )
  
  return(
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <form id="order" onSubmit={handleSubmit(handleConfirmOrder)} action="">
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
                {...register('cep', {valueAsNumber: true})}
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'street' } }}     
                placeholder="Rua"
                {...register('street')}
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'number' } }}     
              
                placeholder="Número"
                {...register('number', {valueAsNumber: true})}
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'additionalAddressDetails' } }}    
                placeholder="Complemento"
                {...register('additionalDetails')}
                optional
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'district' } }}  
                placeholder="Bairro"
                {...register('district')}
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'city' } }}  
                placeholder="Cidade"
                {...register('city')}
              />
              <TextInput 
                containerProps={{ style: { gridArea: 'state' } }}  
                placeholder="UF"
                {...register('state')}
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
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                    <div>
                      <CreditCard size={18}/>
                      <span>CARTÃO DE CRÉDITO</span>
                    </div>
                  </RadioInput>
                  <RadioInput 
                    isSelected={selectedPaymentMethod === 'debit'}
                    {...register('paymentMethod')}  
                    value="debit"
                  >
                  <div>
                      <Bank size={18}/>
                      <span>CARTÃO DE DÉBITO</span>
                    </div>
                  </RadioInput>
                  <RadioInput
                    isSelected={selectedPaymentMethod === 'cash'}
                    {...register('paymentMethod')}
                    value="cash"
                  >
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
            {cartTotal.map((coffee) =>(
              <CartCard 
                key={coffee.id}
                coffee={coffee}
              />
            ))}
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
          <ConfirmButton form='order' type="submit">
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </ConfirmOrder>
      </InfoContainer>
    </Container>
  )
}