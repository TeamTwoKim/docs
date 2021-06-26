import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";
import { MDContainer } from "./shared";
import { ReactComponent as NestJsIcon } from "../../assets/nestjs.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const markdown = `
# NestJs   

## NestJs Docs

### NestJs 공식 홈페이지 Docs [![NestJs](https://img.shields.io/badge/-NestJs-E0234E?style=flat&logo=NestJs&logoColor=white "NestJs")](https://docs.nestjs.com/)
### NestJs 한국어 공식 Docs [![NestJs](https://img.shields.io/badge/-NestJsKR-E0234E?style=flat&logo=NestJs&logoColor=white "NestJsKR")](https://docs.nestjs.kr/)



`;

function NestJs({ xclick }) {
  return (
    <MDContainer>
      <TopTap>
        <TopTapItem>
          <NestJsIcon width={16} height={16} style={{ marginLeft: 10 }} />
          <span>NestJs</span>
          <Close icon={faTimes} onClick={xclick} />
        </TopTapItem>
      </TopTap>
      <Wrapper>
        <ReactMarkdown
          children={markdown}
          components={components}
        ></ReactMarkdown>
      </Wrapper>
    </MDContainer>
  );
}

export default NestJs;
