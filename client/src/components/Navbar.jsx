import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Container = styled.div`
    height: 60 px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
position: static;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
    font-family: 'Tangerine', cursive;
    font-weight: 800;
    font-size: 30px;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const Button = styled.button`
    background-color: rgb(102,12,33);
    color: wheat;
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const dispatch = useDispatch()
    const history=useHistory();
    const handleClick = () => {
        localStorage.clear()
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
                <Link to="/register">
                <MenuItem><Button>REGISTER</Button></MenuItem>
                </Link>
                <Link to="/login">
                    <MenuItem><Button>SIGN IN</Button></MenuItem>
                </Link>
                <Link onClick={handleClick}>
                    <MenuItem><Button>LOG OUT</Button></MenuItem>
                </Link>
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