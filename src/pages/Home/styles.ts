import styled from "styled-components";
import { typography } from "../../styles/typography";

export const HomeContainer = styled.div`
  padding: 3.5rem 0 6.75rem 0;
  display: flex;
  gap: 3.5rem;
  img{
    max-width: 28rem;
  }
`

export const HeaderSection = styled.header`
  h1{
    ${typography.fonts.titleXL}
    color: ${(props)=> props.theme.colors["base-title"]}
  }
  span{
    padding-top: 1rem;
    ${typography.fonts.textL}
    color: ${(props)=> props.theme.colors["base-subtitle"]}
  }
`

export const ItemsContainer = styled.div`
  padding-top: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
      .icon-background{ 
        padding: 0.4rem;
        border-radius: 50%;
        color: ${(props)=> props.theme.colors["background"]};
      }
      span{
        ${typography.fonts.textM}
        color: ${(props)=> props.theme.colors["base-text"]};
      }
    }
`

export const CoffeeList = styled.div`
  h1{
    ${typography.fonts.titleL};
    color: ${(props)=> props.theme.colors["base-subtitle"]};
  }
`
