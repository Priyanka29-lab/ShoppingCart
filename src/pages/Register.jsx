import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-red-dress-sexy-carefree-woman-posing-near-blue-wall-studio-model-looking-cellphone-screen-holding-smartphone-using-apps_158538-25770.jpg?w=900&t=st=1673727393~exp=1673727993~hmac=fe6259bfea5ecb68ad3f8ee1b33633232ae3aa7124fb5027f6ef9ef1ba91b2b9")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  justify-content: center;
  min-width: 50%;
  margin: 10px 5px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #7B2869;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="👤 Enter Your Name" /> 
          <Input placeholder="📳 Mobile Number" />
          <Input placeholder="📧 Email" />
          <Input placeholder="🔐 Choose Password" />
          <Input placeholder="🔐 confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;