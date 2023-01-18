import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #7B2869;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


const Announcement = () => {
  return (
    <Container>
        Super Deals! 
        Get ₹200 Off on Your First Order.
        Free Shipping on Orders above ₹699.
    </Container>
  )
}

export default Announcement