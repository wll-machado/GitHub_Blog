
import Header from '../../components/Header'
import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <LayoutContainer>
        <Header />
        <main>
          <Outlet />
        </main>
    </LayoutContainer>
  )
}

export default DefaultLayout
