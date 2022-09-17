import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 32px;
`;
const AddContainer = styled.div`
  margin: 40px 0px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #db9b12;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid white;
  background-color: #db9b12;
  color: white;
  cursor: pointer;
  font-weight: 500;
  margin-left: 30px;
  /* ${mobile({ width: "75px" })} */

  &:hover {
    border: 1px solid #db9b12;
    background-color: white;
    color: #db9b12;
  }
`;




const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Jeans</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi voluptatem quos neque, ipsa amet asperiores ad dolores officia ullam praesentium eveniet ducimus aspernatur similique. Neque eaque dolorum voluptas possimus modi non. Corrupti quaerat consequuntur dolor placeat laudantium sequi magni. Voluptate, laborum reprehenderit! Eveniet animi, eaque odit repellat reiciendis commodi.</Desc>
          <Price>$20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
