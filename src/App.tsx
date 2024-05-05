import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { CartContextProvider } from './contexts/CartManagerContext'


export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
     <BrowserRouter>
      <CartContextProvider>
        <Router /> 
      </CartContextProvider>
     </BrowserRouter>
     <GlobalStyle />
   </ThemeProvider>
  ) 
}
