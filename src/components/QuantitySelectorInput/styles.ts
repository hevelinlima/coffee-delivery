import styled from "styled-components";
import { typography } from "../../styles/typography";

export const InputContainer = styled.section`
  width: 4.6rem;
  height: 100%;

  display: flex;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 8px;
  background: ${(props)=>props.theme.colors["base-button"]};

  button{
    background-color: transparent;
    display: flex;
    align-items: center;
    border: none;

    padding: 0 0.25rem;
    > svg {
      color:${(props)=>props.theme.colors["purple-dark"]};
      &:hover{
        opacity: 0.8;
      }
    }
  }
  p{
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props)=>props.theme.colors["base-title"]};
    ${typography.fonts.textM}

    width: 1.25rem;
  }
`