import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { useLocation } from "react-router-dom/cjs/react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"
import {addProduct} from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container=styled.div`` 
const Wrapper=styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer=styled.div`
  flex: 1;

`
const Image=styled.img`
  width: 65%;
  align-items: center;
  margin-left: 100px;
`
const Title=styled.h1`
  text-transform: uppercase;`
const Desc=styled.p`
  margin: 20 px ;
  
`
const InfoContainer=styled.div`
font-family: 'Cormorant Garamond', serif;
font-weight: 300;
flex: 2;
font-size: 20px;
`
const Price=styled.span`
  font-weight: 100;
  font-size: 20px;
  `
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;

`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: grey;
  }
`

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch()

useEffect(()=>{
  const getProduct = async ()=>{
    try{
      const res = await publicRequest.get("/products/find/"+id);
      setProduct(res.data);
    }catch{}
  }
  getProduct()
}, [id])

const handleQuantity = (type) => {
  if (type === "dec"){
    quantity>1 && setQuantity(quantity-1)
  } else {
    setQuantity(quantity+1)
  }
}

const handleClick = ()=>{
 dispatch(
  addProduct({ ...product, quantity, size })
 );
};
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
              <Image src={product.img}/>
            
            </ImgContainer>
            <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>Price: $ {product.price}</Price> 
            <FilterContainer>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e)=> setSize(e.target.value)}>
                  {product.size?.map((s)=>(
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={()=>handleQuantity("dec")}/>
                <Amount>{quantity}</Amount>
                <Add onClick={()=>handleQuantity("inc")}/>
              </AmountContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product