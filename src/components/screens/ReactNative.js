import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
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
  width: 150px;
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
# React Native 

React-native 공식 홈페이지 Doc : [![ReactNative](https://img.shields.io/badge/-React%20Native-61DAFD?style=flat&logo=React&logoColor=white "ReactNative")](https://reactnative.dev/docs/getting-started)



## React Native Styled-Components

### Install

\`\`\`cmd
npm install --save styled-components
npm install --save-dev babel-plugin-styled-components @types/styled-components @types/styled-components-react-native
\`\`\` 

- babel-plugin-styled-components : 디버깅시 class명 확인 쉽게 만들어 준다.
\`\`\`javascript
//babel.comfin.js

module.exports = {
  ...
  plugins: ['babel-plugin-styled-components'],
};
\`\`\` 

`;

function Javascript({ xclick }) {
  return (
    <Container>
      <TopTap>
        <TopTapItem>
          <ReactIcon width={16} height={16} style={{ marginLeft: 10 }} />
          <span>React-native</span>
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
