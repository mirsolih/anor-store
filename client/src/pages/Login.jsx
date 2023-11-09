import { useState } from "react"
import styled from "styled-components"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer"
import logo from "../photos/logo.JPG"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



const Error = styled.span`
color:red;
`
const Logo = styled.img`
    padding-top: 30px;
    height: 10vh;
    width: 30vh;
    display: flex;
    align-items: center;
    `
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    flex-direction: column;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`
const Title = styled.h1`
    font-style: 20px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20 px;
    background-color: rgb(102,12,33);
    color: white;
    cursor: pointer;
    &:disabled{
        color:green;
        cursor: not-allowed;
    }

`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
`
const Name = styled.h1`
    font-family: 'Tangerine', cursive;
    font-size: 50px;
`
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error} = useSelector((state)=> state.user)
    const user = useSelector((state)=> state.user)
    console.log(user)
    const history = useHistory()
    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password});
        //history.push("/")

    }


  return (
    <Container>

        <Logo src={logo}></Logo>
        <Name>ANOR</Name>
        <Wrapper >
            <Title>SIGN IN</Title>
            <Form>
                <Input 
                placeholder = "Username" 
                onChange={(e) => setUsername(e.target.value)}
                />
                <Input 
                placeholder = "Password" 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick} disabled={isFetching}>SIGN IN</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>FORGOT YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>

    <Footer></Footer>
    </Container>
  )
}

export default Login