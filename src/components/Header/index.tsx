import { HeaderContainer } from "./styles";
import logoHeader from "../../assets/logo.svg"

export function Header(){
  return(
    <HeaderContainer>
      <img src={logoHeader} alt="" />
      <nav>
        <p>Teresina, PI</p>
        <p>card</p>
      </nav>
    </HeaderContainer>
  )
}