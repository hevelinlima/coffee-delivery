import styled from "styled-components";
import { typography } from "../../styles/typography";

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
  
  .cart-class{
    background: ${props => props.theme.colors['yellow-light']};
    color: ${props => props.theme.colors['yellow-dark']};
    padding: 0 0.5rem;
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    transition: all 0.2;
    position: relative;

    span{
      background-color: ${(props)=> props.theme.colors['yellow-dark']};
      color: ${(props)=> props.theme.colors['white']};
      ${typography.fonts.textXS};
      font-weight: bold;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: 0;
      top: 0;
      transform: translate(35%, -35%);
    }

    &:hover{
      opacity: 0.7;
    }
  }
`

export const LocationContainer = styled.div`
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
`
