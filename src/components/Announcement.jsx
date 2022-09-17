import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #db9b12;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "12px" })}
`;

const Announcement = () => {
  return <Container>Free Shipping on orders over $75</Container>;
};

export default Announcement;
