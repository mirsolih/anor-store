import styled from "styled-components"
import logo from "../photos/logo.JPG"
import {mobile} from "../responsive"
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const Logo = styled.img`
    padding-top: 30px;
    height: 10vh;
    width: 30vh;
    display: flex;
    align-items: center;

`
const InfoContainer = styled.div`
    padding: 0px 40px; 
    align-items: center;
    display: flex;
    flex-direction: column;
    ${mobile({fontSize: "5px"})}
`
const Title = styled.h1`
    padding-top: 50px;
    font-size: 30px;
    font-family: 'Prata', serif;
    
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    font-family: 'Cormorant Garamond', serif;
`
const Slider = () => {
    return (
    <Container>
        <Wrapper>
            <Slide>
            <Logo src={logo} alt="Logo"/>
            <InfoContainer>
                <Title>CLOTHES AND ACCESORIES</Title>
                <Desc>ANOR HAUTE COUTURE combines vibrant colors, 
                    intricate patterns, and traditional elements to 
                    create a unique and culturally rich style. The local region's 
                    nomadic heritage is often reflected in the use of flowing fabrics, 
                    layered garments, and ornate accessories. Uzbek fashion 
                    embraces a fusion of traditional and contemporary aesthetics, 
                    resulting in visually stunning ensembles that capture the essence of 
                    the region's diverse cultural tapestry.</Desc>
            </InfoContainer>
            </Slide>
        </Wrapper>
    </Container>
  )
}

export default Slider