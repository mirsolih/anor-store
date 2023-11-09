import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";


const Container=styled.div`
    
`;
const Title=styled.h1`
    font-family: 'Cormorant Garamond', serif;
    font-family: 'Playfair Display', serif;`;
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter=styled.div`
    margin: 20px;
`;
const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select=styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option=styled.option``;

const ProductList = () => {
    const location = useLocation();
    console.log(location)
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value,
        })
    }
    console.log(filters)
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>IKAT DRESSES</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products</FilterText>
            <Select name="material" onChange={handleFilters}>
                <Option disabled >
                    Material
                </Option>
                <Option>Atlas</Option>
                <Option>Adras</Option>
                <Option>Solid</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="acs">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList