import { Badge }  from '@mui/material';
import { Search, ShoppingBagOutlined } from '@mui/icons-material/';
import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive'


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchBar = styled.div`
    border: 0.5px solid lightslategrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;


const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    cursor: pointer;
    font-style: 14px;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchBar>
                    <Input placeholder="Search" />
                    <Search  style={{color: "gray", fontsize:16}}/>
                </SearchBar>
            </Left>
            <Center><Logo>MYSHOPPY</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>
                SIGN IN
                </MenuItem>
                <MenuItem>
                <Badge badgeContent={0} color="primary">
           <ShoppingBagOutlined />
         </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
