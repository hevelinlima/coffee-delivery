import { NavigateFunction } from "react-router-dom";
import { OrderInfo } from "../pages/Checkout";
import { CartItem } from "./reducer";

export enum ActionTypes{
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM = 'INCREMENT_ITEM',
  DECREMENT_ITEM = 'DECREMENT_ITEM',
  CART_CHECKOUT = 'CART_CHECKOUT' 
}

export type Actions = 
  | {
    type: ActionTypes.ADD_ITEM
    payload: {
      item: CartItem
    }
  }
  | {
    type: 
    | ActionTypes.DECREMENT_ITEM
    | ActionTypes.INCREMENT_ITEM
    | ActionTypes.REMOVE_ITEM
    payload: {
      itemId: CartItem['id']
    }
  }
  | {
    type: ActionTypes.CART_CHECKOUT
    payload: {
      order: OrderInfo
      callback: NavigateFunction
    } 
  }

export function addItemAction(item: CartItem) {
  return{
    type: ActionTypes.ADD_ITEM,
    payload: {
      item
    },
  } satisfies Actions
}

export function removeItemAction(itemId: CartItem['id']) {
  return{
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId
    },
  } satisfies Actions
}

export function incrementItemAction(itemId: CartItem['id']) {
  return{
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      itemId
    },
  } satisfies Actions
}

export function decrementItemAction(itemId: CartItem['id']) {
  return{
    type: ActionTypes.DECREMENT_ITEM,
    payload: {
      itemId
    },
  } satisfies Actions
}

export function checkoutAction(
  order: OrderInfo,
  callback: NavigateFunction
){
  return{
    type: ActionTypes.CART_CHECKOUT,
    payload: {
      order,
      callback
    },
  } satisfies Actions
}