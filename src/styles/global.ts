import { createGlobalStyle } from 'styled-components'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: ${(props) => props.theme.colors['background']};
}

body, button, textarea, input{
  ${typography.fonts.textM};
}
`