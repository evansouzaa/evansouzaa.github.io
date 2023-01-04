import GlobalStyle from "./themes/global-style"
import { ThemeProvider } from "styled-components"
import { theme } from "./themes/theme"
import { MainPage } from "./components/MainPage"

export default function App() {

  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <MainPage>
            <div>testando 212</div>
            {theme.colors.backgroundColor}
          </MainPage>
      </ThemeProvider>
  )
}
