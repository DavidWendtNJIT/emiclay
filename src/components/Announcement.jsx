import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #DB9B12;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Free Shipping on orders over $75</Container>;
};

export default Announcement;
