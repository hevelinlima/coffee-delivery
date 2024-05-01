import styled from "styled-components";
import { typography } from "../../../../styles/typography";

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  width: 11.3rem;
  height: 3.125rem;

  border: 1px solid ${(props) => props.theme.colors["base-input"]};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors["base-button"]};
  ${typography.fonts.buttonM}

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme.colors['purple-light']};
    border-color: ${(props) => props.theme.colors["purple"]};
  }
  input{
    display: none;
  }
`
