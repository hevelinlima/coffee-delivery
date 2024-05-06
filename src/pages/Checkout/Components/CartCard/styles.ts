import styled from "styled-components";
import { typography } from "../../../../styles/typography";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 28rem;
  width: auto;

  gap: 1.25rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props)=>props.theme.colors["base-button"]};

  h3{
    ${typography.fonts.textM}
    color: ${(props)=>props.theme.colors["base-subtitle"]};

    margin-bottom: 0.5rem;
  }
  main{
    padding-right: 1.5rem;
  }
  section{  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.25rem;
    ${typography.fonts.textM};
    font-weight: 700;
    color: ${(props)=>props.theme.colors["base-text"]};
  }
  @media only screen and (max-width: 768px) {
    gap: 0.25rem;
    img{
      display: none;
    }
  }
`

export const MainSection = styled.div`
  height: 2.375rem;
  display: flex;
  gap: 0.5rem;

  .button-remove{
    display: flex;
    justify-content: flex;
    align-items: center;
    height: 100%;
    gap: 0.25rem;

    padding: 0.375rem 0.5rem;
    border: none;
    border-radius: 8px;
    max-width: 5.7rem;
    background: ${(props)=>props.theme.colors["base-button"]};

    > svg{
    background-color: transparent;
    color: ${(props)=>props.theme.colors["purple"]};
    }
  p{
    ${typography.fonts.buttonM}
    }
  &:hover{
    background: ${(props)=>props.theme.colors["base-hover"]};
    > svg{
    color: ${(props)=>props.theme.colors["purple-dark"]};
    }
  }
  }
`