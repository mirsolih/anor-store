import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Parse from 'parse/dist/parse.min.js';
import { logoutState } from '../redux/userRedux';
import { render } from 'react-dom';
import {mobile} from "../responsive"


const Container = styled.div`
    height: 60 px;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
position: static;
${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({display: "none"})}
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
    font-family: 'Tangerine';
    font-weight: 800;
    font-size: 30px;
    ${mobile({fontSize: "24px"})}
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent: "center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`
const Button = styled.button`
    background-color: rgb(102,12,33);
    color: wheat;
    ${mobile({fontSize: "10px"})}
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    const dispatch = useDispatch()
    const history=useHistory();
    const [currentUser, setCurrentUser] = useState(null);

    const handleClick = (e) => {
        //e.preventDefault()
        console.log("logout evoked")
        e.preventDefault();
        console.log(user)
        dispatch(logoutState());
        // navigate('/');ush("/")
        console.log(user,)

    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN </Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>A N O R</Logo>
            </Center>
            <Right>
                { !user ? <Link to="/register">
                <MenuItem><Button>REGISTER</Button></MenuItem>
                </Link>: null }
                { !user ? <Link to="/login">
                    <MenuItem><Button>SIGN IN</Button></MenuItem>
                </Link> : 
                <Link onClick={handleClick}>
                    <MenuItem><Button>LOG OUT</Button></MenuItem>
                </Link> }
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar