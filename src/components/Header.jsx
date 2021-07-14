import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false)
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt="Tesla Logo" />
            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Solar Roof</div>
                <div>Solar Panels</div>
            </MenuGroup>
            <RightMenu>
                <div><a href="#">Shop</a></div>
                <div><a href="#">Account</a></div>
                <MenuIconContainer onClick={()=>setBurgerStatus(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={BurgerStatus}>
                <CloseContainer>
                    <Close onClick={()=>setBurgerStatus(false)} />
                </CloseContainer>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}
export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;  // 0 20px was in video
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
`
const MenuGroup = styled.div`
    display: flex;
    text-transform: capitalize;
    div{
        font-weight: 550; // 600 in video
        padding: 5px 25px; // 0 10px was in video
        cursor: pointer;
        justify-content: space-between;
        border-radius: 9px;
    }
    div:hover{
        background-color: rgba(0, 0, 0, 0.06);
        transition: ease-in-out .5s
    }
    @media(max-width: 768px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 550; // 600 in video
        text-transform: capitalize;
        /* padding-right: 10px; */
        padding: 5px 10px 5px 10px;
        border-radius: 9px;
    }
    a:hover{
        background-color: rgba(0, 0, 0, 0.07);
        transition: ease-in-out .5s
    }
`
const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a{
            font-weight: 600;
        }
    }
`


