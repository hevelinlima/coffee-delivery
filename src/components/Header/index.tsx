import { Aside, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logoHeader from "../../assets/logo.svg"
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header(){
  const { cart } = useCart()
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
        <NavLink to={'/checkout'} aria-disabled={cart.length === 0} className="cart-class">
          <ShoppingCart size={22}  weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}