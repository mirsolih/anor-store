import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import StripeCheckout from "react-stripe-checkout"
import logo from "../photos/logo.JPG" 
import { useEffect, useState } from 'react'
import { userRequest } from '../requestMethods'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
    font-family: 'Cormorant Garamond', serif;
`
const Title = styled.h1`
    font-weight: 200;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black": "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;

`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``

const ProductID = styled.span``

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: grey;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid black;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content:space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`



function Cart() {
    const cart = useSelector((state)=>state.cart)
    console.log(cart)
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()

    const navigateHome = () => {
        history.push("/")
    }
    const onToken = (token) => {
        setStripeToken(token);
    }
    useEffect(()=> {
        const makeRequest = async()=>{
          try{
            const res = await userRequest.post("/checkout/payment", {
                tokenId: stripeToken.id,
                amount: cart.total*100,
            })

            history.push("/success", {data:res.data})
          } catch{} 
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history])
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton onClick={navigateHome}>Continue shopping</TopButton>
            </Top>
            <Bottom>
                <Info>
                   { cart.products.map(product => ( 
                   <Product>
                        <ProductDetails>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product: </b>{product.title}</ProductName>
                                <ProductSize><b>Size: </b>{product.size}</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <ProductAmount>{product.quantity}</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.price * product.quantity}</ProductPrice>

                        </PriceDetails>
                    </Product>))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                    name="ANOR"
                    image = {logo} alt="Logo"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cart.total}`}
                    amount={cart.total*100}
                    token={onToken}
                    stripeKey='pk_test_51NGlCLEyGb2aOfW6KVcUmIF4c4aYpPsVwy7YAPK9rjjZ7uw0lbnEcDnkxBSm5nWzjPvG0AMOCAR0kQEc9QrPXo3k00JlZMIHYs'
                    >
                    <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart