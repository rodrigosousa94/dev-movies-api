import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const [changeBackground, setchangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        
        if(window.pageYOffset >= 150){
            setchangeBackground(true)
        }else{
            setchangeBackground(false)        }
    }

    

    return(
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt='logo'/>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header