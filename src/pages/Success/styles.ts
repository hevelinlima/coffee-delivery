import styled from "styled-components";
import { typography } from "../../styles/typography";


export const Heading = styled.header`
 margin-top: 3rem;
  h1{
    ${typography.fonts.titleL}
    color: ${(props)=> props.theme.colors["yellow-dark"]}
  }
  span{
    ${typography.fonts.textL}
    color: ${(props)=> props.theme.colors["base-subtitle"]}
  }
`
export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  max-width: 70rem;
  margin-top: 2rem;
  gap: 6.375rem;
  max-height: 18.5rem;
  img {
    height: 90%;
    width: 28rem;
  }
` 

export const DataReview = styled.div`
  padding: 2.5rem 8.25rem 2.5rem 2.5rem;
  border-radius: 8px 40px;
  border: 1px solid transparent;
  background: linear-gradient(to right, white, white), linear-gradient(to right, #dbac2c, #8047f8);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  div{
    display: flex;
    align-items: center;
    justify-items: space-between;
    .icons{ 
      padding: 0.4rem;
      border-radius: 50%;
      color: ${(props)=> props.theme.colors["background"]};
    }
    p{
      padding-left: 0.75rem;
      ${typography.fonts.textM}
      color: ${(props)=> props.theme.colors["base-text"]};
    }
  }
`