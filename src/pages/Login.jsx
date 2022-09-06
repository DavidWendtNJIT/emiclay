import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:
    url("https://img.freepik.com/premium-photo/green-leaf-polymer-clay-press-forms-cutter-beige-background-copy-space_143127-1629.jpg?w=2000")
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  margin-bottom: 10px;
  border: 1px solid #db9b12;
  padding: 15px 20px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    border: 1px solid white;
    background-color: #db9b12;
    color: white;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOG IN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
