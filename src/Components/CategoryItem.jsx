import { FavoriteBorderOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
      flex: 1;
      margin: 3px;
      height: 70vh;
      position: relative;
`;


const Image = styled.img`
     width: 100%;
     height: 100%;
     object-fit: cover;
`;


const Info = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

`;


const Title = styled.h1`
     color: white;
     margin-bottom: 20px;

`



const Button = styled.button`
     border: 5;
     border-radius: 2;
     border-style: outset;
     border-color: #3C2A21;
     border-width: 1px;
     padding: 10px;
     background-color: transparent;
     color: #1A120B;
     cursor: pointer;
     font-weight: 600;

`

const button = styled.button`
  border: 5;
  padding: 1px;
  cursor: pointer;
  font-weight: 400;
`



const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>
            {item.title}
        </Title>
        <Button>SHOP NOW</Button>
        <button onClick={() => (<FavoriteBorderOutlined/>)}></button>
      </Info>
    </Container>
  )
}

export default CategoryItem
