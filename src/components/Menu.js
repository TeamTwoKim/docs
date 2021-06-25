import { faCopy, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCodeBranch,
  faCog,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  width: 55px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(26, 26, 26);
  border-right: 1px solid rgb(16, 16, 16);
`;

const MenuButton = styled.div`
  transition: all 0.3s;
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-left: 4px solid rgb(26, 26, 26);
  border-color: ${(props) =>
    props.menuId === props.buttonId ? "white" : "rgb(26, 26, 26)"};
  color: ${(props) =>
    props.menuId === props.buttonId ? "white" : "rgb(111, 116, 118)"};
  :hover {
    color: white;
    cursor: pointer;
  }
`;

function Menu({ menuId, firstClk, secondClk, thirdClk }) {
  return (
    <Container>
      <div>
        <MenuButton menuId={menuId} buttonId={1} onClick={firstClk}>
          <FontAwesomeIcon icon={faCopy} />
        </MenuButton>
        <MenuButton menuId={menuId} buttonId={2} onClick={secondClk}>
          <FontAwesomeIcon icon={faSearch} />
        </MenuButton>
        <MenuButton menuId={menuId} buttonId={3} onClick={thirdClk}>
          <FontAwesomeIcon icon={faCodeBranch} />
        </MenuButton>
      </div>
      <div>
        <MenuButton buttonId={4}>
          <FontAwesomeIcon icon={faUserCircle} />
        </MenuButton>
        <MenuButton buttonId={5}>
          <FontAwesomeIcon icon={faCog} />
        </MenuButton>
      </div>
    </Container>
  );
}

export default Menu;
