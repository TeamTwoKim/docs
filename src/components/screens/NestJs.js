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
  padding: 10px 50px;
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
# NestJs  
NestJs 공식 홈페이지 Docs : [![NestJs](https://img.shields.io/badge/-NestJs-E0234E?style=flat&logo=NestJs&logoColor=white "NestJs")](https://docs.nestjs.com/)
<br/>
NestJs 한국어 공식 Docs : [![NestJs](https://img.shields.io/badge/-NestJsKR-E0234E?style=flat&logo=NestJs&logoColor=white "NestJsKR")](https://docs.nestjs.kr/)

`;

function NestJs({ xclick }) {
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

export default NestJs;
