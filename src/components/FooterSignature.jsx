import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const Signature = styled.span`
  font-weight: 600;
`;

const FooterSignature = () => {
  return (
    <Container>
      <Signature>Created by: David Wendt</Signature>
    </Container>
  );
};

export default FooterSignature;
