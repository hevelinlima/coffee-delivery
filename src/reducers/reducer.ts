import { produce } from "immer"
import { OrderInfo } from "../pages/Checkout"
import { ActionTypes, Actions } from "./actions"


export interface CartItem {
  id: string,
  quantity: number
}

export interface Order extends OrderInfo{ 
  id: number,
  items: CartItem[]
}

interface CartState{
  cart: CartItem[],
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions){
  switch (action.type){
    case ActionTypes.ADD_ITEM:  
      return produce(state, (draft)=> {
        const itemAlreadyInCart = draft.cart.find(
          (item)=> item.id === action.payload.item.id
        )
        if (itemAlreadyInCart){
          itemAlreadyInCart.quantity += action.payload.item.quantity
        }else{
          draft.cart.push(action.payload.item)
        }
      })
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draftState)=> {
        const itemToRemove = draftState.cart.findIndex(
          (item) => item.id === action.payload.itemId,
        )
        draftState.cart.splice( itemToRemove, 1)
      })
    case ActionTypes.INCREMENT_ITEM:
      return produce(state, (draftState)=> {
        const itemToIncrement = draftState.cart.find(
          (item) => item.id === action.payload.itemId
        )
        if (itemToIncrement?.id){
          itemToIncrement.quantity += 1
        }
      })
    case ActionTypes.DECREMENT_ITEM:
      return produce(state, (draftState)=> {
        const itemToDecrement = draftState.cart.find(
          (item) => item.id === action.payload.itemId,
        )
        if (itemToDecrement?.id && itemToDecrement.quantity > 1){
          itemToDecrement.quantity -= 1
        }
      })
    case ActionTypes.CART_CHECKOUT:
      return produce(state, (draftState=>{
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order
        }
        draftState.orders.push(newOrder)
        draftState.cart = []

        action.payload.callback(`order/${newOrder.id}/success`)
      }))
    default:
      return state
  }
}