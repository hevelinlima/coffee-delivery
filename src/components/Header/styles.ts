import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  img {
    height: 2.5rem;
  }
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;
  height: 2.375rem;

  .location{
    display: flex;
    align-items: center;
    gap: 0.25rem;
    height: 100%;
    padding: 0.6rem;
    border-radius: 8px;
    background: ${(props)=> props.theme.colors['purple-light']};
    p{
      color: ${(props)=> props.theme.colors['purple']};
      font-size: 0.875rem;
    }
  }
  
  .cart-class{
  background: ${props => props.theme.colors['yellow-light']};
  color: ${props => props.theme.colors['yellow-dark']};
  padding: 0 0.5rem;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: all 0.2;

  &:hover{
    opacity: 0.7;
  }
  }
`