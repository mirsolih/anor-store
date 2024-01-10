import styled from "styled-components"
import Footer from "../components/Footer"
import logo from "../photos/logo.JPG"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddUser } from "../redux/apiCalls"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Logo = styled.img`
    padding-top: 30px;
    height: 10vh;
    width: 30vh;
    display: flex;
    align-items: center;
    `
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20 px;
    background-color: rgb(102,12,33);
    color: white;
    cursor: pointer;

`
const Name = styled.h1`
    font-family: 'Tangerine', cursive;
    font-size: 50px;
`

const Register = () => {

    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev)=> {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    console.log(inputs)
    const handleClick = (e) => {
        e.preventDefault();
        const user = {...inputs}
        AddUser(user, dispatch)
    }

  return (
    <Container>
    <Logo src={logo}></Logo>
        <Name>ANOR</Name>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input name="email" type="text" onChange={handleChange} placeholder = "Email"/>
                <Input name="username" type="text" onChange={handleChange} placeholder = "Username"/>
                <Input name="password" type="password" onChange={handleChange} placeholder = "Password"/>
                <Input name="password" type="password" placeholder="Confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accourdance with the <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button onClick={handleClick}>CREATE</Button>
            </Form>
        </Wrapper>
        <Footer></Footer>
    </Container>
  )
}

export default Register