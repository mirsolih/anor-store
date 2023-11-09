import { Facebook, Instagram, MailOutline, Phone, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    font-family: 'Asap Condensed', sans-serif;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo= styled.h1`
    font-family: 'Scheherazade New', serif;
`;
const Desc= styled.p`
    margin: 20px 0px;
`;
const SocialContainer= styled.div`
    display: flex;
`;
const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Title=styled.h3`
    margin-bottom: 30px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: right;
`;
const Payment=styled.img``;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ANOR</Logo>
            <Desc>Feel the vibe of East</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="d62976">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Right>
            <Title>Contact:</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Nurafshon str 50, Tashkent, Uzbekistan, 10113.</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/> +9989 71 278 34 16</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> anorcouture@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer