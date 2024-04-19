import menuData from '../../../coffee-data.json'

export function Card(){
  const firstMenuItem = menuData.coffee[0]
  return (
  <>
    <p>Card: {firstMenuItem.title}</p>
  </>
)}