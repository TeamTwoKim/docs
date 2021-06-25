import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: rgb(26, 26, 26);
  border-top: 1px solid rgb(16, 16, 16);
`;

function Footer() {
  return <Container></Container>;
}

export default Footer;
