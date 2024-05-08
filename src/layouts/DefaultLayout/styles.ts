
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 1.5rem auto;
  padding: 0.5rem 4rem;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    margin: 2rem;
    padding: 0;
  }
`
