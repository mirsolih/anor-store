import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: rgb(102,12,33);
    color: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: 14px;
    font-weight: bold;
    width: 100%;

`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders over $500 
    </Container>
  )
}

export default Announcement