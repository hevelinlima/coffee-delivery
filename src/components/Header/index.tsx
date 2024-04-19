import { Aside, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoHeader from "../../assets/logo.svg"
import { NavLink } from "react-router-dom";

export function Header(){
  return(
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logoHeader} alt="Coffee Delivery logo" />
      </NavLink>
      <Aside>
        <div className="location">
          <MapPin size={22} color="#8047f8" weight="fill" />
          <p>Teresina, PI</p>
        </div>
        <NavLink to={'/checkout'} className="cart-class">
          <ShoppingCart size={22}  weight="fill" />
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}