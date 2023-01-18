import { CurrencyRupeeOutlined, Facebook, Instagram, MailOutline,  PaymentsOutlined,  Phone,  QrCodeScannerOutlined,  Room, Twitter, WhatsApp, YouTube } from "@mui/icons-material";
import styled from "styled-components";
 
  
  const Container = styled.div`
    display: flex;
    
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
   
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 80%;
  `;

  const Payments = styled.div`
      width: 50%;
      margin-bottom: 20px;
    display: flex;
    align-items: center;
  `
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MYSHOPPY</Logo>
          <Desc>
            KEEP IN TOUCH WITH US
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5998">
              <Facebook/>
            </SocialIcon>
            <SocialIcon color="bc2a8d">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color="25D366">
              <WhatsApp/>
            </SocialIcon>
            <SocialIcon color="1DA1F2">
              <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
              <YouTube/>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Gwalior-474001, India 
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91-7374763234
          </ContactItem>
          <ContactItem>
            <WhatsApp style={{marginRight:"10px"}} /> +91-8358934749 (from 10 AM to 6 PM, Mon to Sun).
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> contact@myshoppy.com
          </ContactItem>
          <Payments>
            <PaymentsOutlined  style={{marginRight:"18px"}} />
            <QrCodeScannerOutlined />
            <CurrencyRupeeOutlined/>
           <Payment src="https://razorpay.com/assets/best-payment-gateway/tab-cc.png"  />
          </Payments>
        </Right>
      </Container>
    );
  };
  
  export default Footer;