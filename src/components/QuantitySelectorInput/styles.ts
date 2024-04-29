import styled from "styled-components";

export const InputContainer = styled.section`
  max-width: 4.5rem;
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
  }
  p{
    display: flex;
    align-items: center;
  }
`