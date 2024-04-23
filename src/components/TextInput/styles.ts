import styled from "styled-components";
import { typography } from "../../styles/typography";

export const TextInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.625rem;
  padding: 0.75rem;
  margin: 0.5rem;

  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["base-input"]};

  input{
    width: 100%;
    border: 0;
    outline: none;
    color: ${(props) => props.theme.colors["base-text"]};
    background-color: transparent;
    ${typography.fonts.textS};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
  span {
    color: ${(props) => props.theme.colors['base-label']};
    padding-right: 0.75rem;
    ${typography.fonts.textS};
    font-style: italic;
    }
`