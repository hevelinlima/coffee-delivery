import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CartItem, Order, cartReducer } from "../reducers/reducer";
import { useNavigate } from "react-router-dom";
import { addItemAction, checkoutAction, decrementItemAction, incrementItemAction, removeItemAction } from "../reducers/actions";
import { OrderInfo } from "../pages/Checkout";

interface CartContextType{
  cart: CartItem[]
  orders: Order[]
  addItem: (item: CartItem) => void
  removeItem: (itemId: CartItem['id']) => void
  incrementItem: (itemId: CartItem['id']) => void
  decrementItem: (itemId: CartItem['id']) => void
  checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps{
  children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps){
  const navigate = useNavigate()
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery-app:1.0',
      )
      if (storedStateAsJSON){
        return JSON.parse(storedStateAsJSON)
      }
      return cartState
    }, 
  )

  const { cart, orders } = cartState

  function addItem(item: CartItem){
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: CartItem['id']){
    dispatch(removeItemAction(itemId))
  }

  function incrementItem(itemId: CartItem['id']){
    dispatch(incrementItemAction(itemId))
  }

  function decrementItem(itemId: CartItem['id']){
    dispatch(decrementItemAction(itemId))
  }

  function checkout(order: OrderInfo){
    dispatch(checkoutAction(order, navigate))
  }

  useEffect(() =>{
    if (cartState){
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery-app:1.0', stateJSON)
    }
  }, [cartState])

  return(
    <CartContext.Provider
      value={{
        cart,
        orders,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        checkout
      }}
    >
      {children}
    </CartContext.Provider>
  )
}