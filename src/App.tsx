import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/Theme/Theme"
import { GlobalStyles } from "./styles/globalTheme"


function App() {
 

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
