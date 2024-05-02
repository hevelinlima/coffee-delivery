import styled from "styled-components";
import { typography } from "../../styles/typography";

export const Container = styled.div`
  max-width: 90rem;
  display: flex;
  gap: 2rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

   h2{
    ${typography.fonts.titleXS}
    color: ${(props)=>props.theme.colors["base-subtitle"]};
    padding-bottom: 1rem;
   }
`

export const CheckoutOrder = styled.main`
   max-width: 40rem;
   height: auto;
   border-radius: 6px;
   background-color:${(props)=>props.theme.colors['base-card']};
   padding: 2.5rem 2.5rem 2rem 2.5rem;
`

export const FormHeader = styled.header`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1rem;
  gap: 0.5rem;
  h3{
    ${typography.fonts.textM}
    color: ${(props)=> props.theme.colors['base-subtitle']}
  }
  p{
    ${typography.fonts.textS}
    color: ${(props)=> props.theme.colors['base-text']}
  }
`

export const InfoForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number additionalAddressDetails additionalAddressDetails'
    'district city state';
  grid-template-columns: 12.5rem 1fr 3.75rem;
  margin: 0.5rem 0.375rem;
  
`

export const PaymentForm = styled.div`
  width: 40rem;
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color:${(props)=>props.theme.colors['base-card']};
  
  header{
    display: flex;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 0.5rem;
    h3{
      ${typography.fonts.textM}
      color: ${(props)=> props.theme.colors['base-subtitle']}
    }
    p{
      ${typography.fonts.textS}
      color: ${(props)=> props.theme.colors['base-text']}
    }
  }
`  

export const PaymentOptions = styled.div`
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    div{
      display: flex;
      gap: 0.75rem;
      padding: 1rem;
      svg{
        color: ${(props)=>props.theme.colors['purple']}; 
      }
    }
  }
`

export const ConfirmOrder = styled.div`
  max-width: 28rem;
  height: auto;
  border-radius: 8px 40px;
  background-color:${(props)=>props.theme.colors['base-card']};
  padding: 1rem 2.5rem 2rem 2.5rem;
`

export const CartTotal = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div{
    display: flex;
    justify-content: space-between;
    span{
      color:${(props)=>props.theme.colors['base-text']};
      ${typography.fonts.textM};
    }
    p{
      color:${(props)=>props.theme.colors['base-subtitle']};
      ${typography.fonts.textL};
      font-weight: bold;
    }
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  border: none;
  padding: 0.75rem 0;
  border-radius: 8px;

  background-color: ${(props)=>props.theme.colors['yellow']};
  color: ${(props)=>props.theme.colors['white']};
  ${typography.fonts.buttonG};
  transition: 0.2s ease;


  &:hover{
    background-color: ${(props)=>props.theme.colors['yellow-dark']};
  }
`
