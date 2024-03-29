
import { Link } from 'react-router-dom/cjs/react-router-dom'
import styled  from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 80vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.50);
    ${mobile({fontSize: "5px"})}
`
const Title = styled.h1`
    color: wheat;
    margin-bottom: 20px;
    
`
const Button = styled.button`
    border: none;
    padding: 10px;
    color: wheat;
    background-color: black;
    cursor: pointer;
    font-weight: 600;
    ${mobile({height: "20px", width:"70px", fontSize: "8px"})}
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
        
    </Container>
  )
}

export default CategoryItem