import styled from "styled-components";
import { typography } from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;
  height: 19.375rem;
  background-color: ${(props)=> props.theme.colors["base-card"]};
  border-radius: 8px 40px;

  header{
    margin-top: -1.25rem;
  }
`

export const CatalogMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;

  div{
    ${typography.fonts.tag}
    color: ${(props)=> props.theme.colors["yellow-dark"]};
    padding-bottom: 1rem;
    span{
      padding: 0.25rem 0.5rem;
      margin: 0.25rem;
      border-radius: 100px;
      background-color: ${(props)=> props.theme.colors["yellow-light"]};
    }
  }
  h2{
    ${typography.fonts.titleS};
    color: ${(props)=> props.theme.colors["base-subtitle"]};
    margin-bottom: 0.5rem;
  }
  p{
    ${typography.fonts.textS};
    color: ${(props)=> props.theme.colors["base-label"]};
    text-align: center;
  }
`

export const CatalogCart = styled.div`
  display: flex;
  align-items: center;
  gap: 1.438rem;

 div{
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  color: ${(props)=>props.theme.colors["base-text"]};

  p{
    ${typography.fonts.textM}
  }
  span{
    ${typography.fonts.titleM}
  }
 }
`

export const InputCatalog = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  form{
    height: 2.375rem;
    display: flex;
    gap: 0.5rem;

    button{
      border: none;

      .button-catalog{
        background: ${props => props.theme.colors['purple-dark']};
        color: white;
        padding: 0.5rem;
        width: 2.375rem;
        height: 100%;
        border-radius: 8px;
        transition: all 0.2;

        &:hover{
        background: ${props => props.theme.colors['purple']};
        cursor: pointer;
        }
      }
    }
  }
`