import { HeaderContainer } from "./styles"
import logo from '../../../public/Logo.png'

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo do blog escrito github blog" />
    </HeaderContainer>
  )
}

export default Header
