import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height: 30vh;
    //background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.p`
    font-size: 30px;
    margin-bottom: 20px;
    font-family: 'Prata', serif;
`
const Description = styled.div`
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
    font-family: 'Cormorant Garamond', serif;
`
const Input = styled.input`
    border: none;
    padding-left: 20px;
`
const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    width: 20%;

`
const InputContainer = styled.div`
    width: 30%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>N E W S L E T T E R </Title>
        <Description>Get timely updated from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='ex. yourname@gmail.com'/>
            <Button>
                <Send/>
            </Button>        
        </InputContainer>
    </Container>
  )
}

export default Newsletter