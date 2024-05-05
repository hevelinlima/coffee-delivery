import { useContext } from "react";
import { CartContext } from "../contexts/CartManagerContext";

export function useCart(){
  return useContext(CartContext)
}