import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 32px;
  background-color: rgb(26, 26, 26);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  border-bottom: 1px solid rgb(16, 16, 16);
  top: 0px;
  left: 0px;
`;

const Leftside = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
`;

const TopIcon = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Center = styled.div`
  font-size: 11px;
  color: white;
  :hover {
    cursor: default;
  }
`;
const Rightside = styled.div``;

const Button = styled.div`
  display: flex;
  color: white;
  font-size: 14px;
  height: 32px;
  align-items: center;
  padding: 0px 10px;
  :hover {
    background-color: rgb(21, 21, 21);
    color: rgb(128, 203, 196);
    cursor: default;
  }
`;

function Header() {
  return (
    <Container>
      <Leftside>
        <TopIcon>
          <FontAwesomeIcon icon={faUserCircle} />
        </TopIcon>
        <Button>
          <span>정보(I)</span>
        </Button>
      </Leftside>
      <Center>
        <span>Docs - TeamTwoKim - qudwnbj</span>
      </Center>
      <Rightside></Rightside>
    </Container>
  );
}

export default Header;
