import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as NestJsIcon } from "../../assets/nestjs.svg";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background-color: #212121;
  width: 100%;
  height: 100%;
  color: white;
`;

const Wrapper = styled.div`
  padding: 20px 50px;
`;

const TopTap = styled.div`
  height: 32px;
`;

const TopTapItem = styled.div`
  height: 100%;
  width: 130px;
  border-bottom: 2px solid rgb(128, 203, 196);
  font-size: 14px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
  position: relative;
`;

const Close = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 11px;
  cursor: pointer;
`;

const source = `
# Javascript   


## Javascript Array [ ]


`;

function Javascript({ xclick }) {
  return (
    <Container>
      <TopTap>
        <TopTapItem>
          <NestJsIcon width={16} height={16} style={{ marginLeft: 10 }} />
          <span>NestJs</span>
          <Close icon={faTimes} onClick={xclick} />
        </TopTapItem>
      </TopTap>
      <Wrapper>
        <MDEditor.Markdown source={source} />
      </Wrapper>
    </Container>
  );
}

export default Javascript;
