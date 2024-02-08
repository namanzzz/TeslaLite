import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    // false => closed
    const cars = useSelector(selectCars);
    // console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>

            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="">{car}</a>
                ))}
            </Menu>

            <RightMenu>
                <a href="https://shop.tesla.com/">Shop</a>
                <a href="https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">TESLA ACCOUNT</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

                {
                    cars && cars.map((car, index) => (
                        <li key={index}><a href="https://www.tesla.com/models">
                            {car}
                        </a></li>
                    ))
                }


                <li> <a href="https://www.tesla.com/inventory/" target='_blank'> Inventory</a> </li>
                <li> <a href="https://www.tesla.com/tradein" target='_blank'>Trade-in</a> </li>
                <li> <a href="https://www.tesla.com/cybertruck" target='_blank'>Cyber Truck</a> </li>
                <li> <a href="https://www.tesla.com/inventory/used/my" target='_blank'>Used Cars</a> </li>
                <li> <a href="https://www.tesla.com" target='_blank' style={{fontWeight: 'bold', fontFamily: 'italic'}}>
                    Visit Tesla.com?  
                    </a></li>

            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0px 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
      a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`


const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.22s ease-in;
    li {
        padding: 10px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a{
            font-weight: 600;

        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;

`