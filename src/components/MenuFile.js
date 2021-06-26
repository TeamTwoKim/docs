import { faChevronDown, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ReactComponent as FolderNode } from "../assets/folder-node.svg";
import { ReactComponent as FolderNodeOpen } from "../assets/folder-node-open.svg";
import { ReactComponent as Typescript } from "../assets/typescript.svg";
import { ReactComponent as Javascript } from "../assets/javascript.svg";
import { ReactComponent as NestJs } from "../assets/nestjs.svg";
import { ReactComponent as React } from "../assets/react.svg";
import { ReactComponent as ReactNative } from "../assets/react-native.svg";
import { ReactComponent as FolderPython } from "../assets/folder-python.svg";
import { ReactComponent as FolderPythonOpen } from "../assets/folder-python-open.svg";
import { ReactComponent as FolderDatabase } from "../assets/folder-database.svg";
import { ReactComponent as FolderDatabaseOpen } from "../assets/folder-database-open.svg";
import { ReactComponent as Graphql } from "../assets/graphql.svg";
import { ReactComponent as Typeorm } from "../assets/typeorm.svg";

const Container = styled.div`
  width: 300px;
  display: ${(props) => (props.menuId === 1 ? "block" : "none")};
  height: 100%;
  background-color: rgb(26, 26, 26);
  border-right: 1px solid rgb(16, 16, 16);
`;

const TopBox = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopBoxText = styled.span`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
`;

const TopBoxEllipsis = styled.div`
  width: 22px;
  height: 22px;
  color: rgb(132, 132, 132);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-right: 10px;
  :hover {
    border-radius: 3px;
    background-color: rgb(46, 47, 47);
    cursor: pointer;
  }
`;

const ContentsBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: rgb(132, 132, 132);
  font-weight: 600;
  position: relative;
  span {
    display: flex;
    position: absolute;
    left: 22px;
  }
  :hover {
    cursor: pointer;
  }
`;

const BottomBox = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(16, 16, 16);
  font-size: 11px;
  color: rgb(132, 132, 132);
  font-weight: 600;
  position: relative;
  span {
    display: flex;
    position: absolute;
    left: 22px;
  }
  :hover {
    cursor: pointer;
  }
`;

const Chevron = styled(FontAwesomeIcon)`
  transition: all 0.5s;
  margin-left: 6px;
  transform: ${(props) => (props.include ? "none" : "rotate(-90deg)")};
`;

const Contents = styled.div`
  height: calc(100% - 107px);
  display: ${(props) => (props.disabled ? "none" : "block")};
`;

const FolderList = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: rgb(132, 132, 132);
  height: 21px;
  cursor: pointer;
  span {
    margin-left: 5px;
    font-size: 12px;
  }
`;

const FileBox = styled.div`
  display: ${(props) => (props.disabled ? "none" : "block")};
`;

const FileList = styled.div`
  padding-left: 40px;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: ${(props) =>
    props.fileSelect ? "rgb(128, 203, 196)" : "rgb(132,132,132)"};
  height: 21px;
  cursor: pointer;
  span {
    margin-left: 5px;
    font-size: 12px;
  }
`;

function MenuFile({
  menuId,
  CntAry,
  firstCnt,
  secondCnt,
  thirdCnt,
  folderAry,
  firstFolder,
  secondFolder,
  thirdFolder,
  fileSelect,
  fs1,
  fs2,
  fs3,
  fs4,
  fs5,
  fs6,
  fs7,
}) {
  return (
    <Container menuId={menuId}>
      <TopBox>
        <TopBoxText>탐색기</TopBoxText>
        <TopBoxEllipsis>
          <FontAwesomeIcon icon={faEllipsisH} />
        </TopBoxEllipsis>
      </TopBox>
      <ContentsBox onClick={firstCnt}>
        <Chevron icon={faChevronDown} include={CntAry.includes(1)} />
        <span>BLOG-DOCS</span>
      </ContentsBox>
      <Contents disabled={!CntAry.includes(1)}>
        <FolderList onClick={firstFolder}>
          <Chevron icon={faChevronDown} include={folderAry.includes(1)} />
          {folderAry.includes(1) ? (
            <FolderNodeOpen width={16} height={16} style={{ marginLeft: 5 }} />
          ) : (
            <FolderNode width={16} height={16} style={{ marginLeft: 5 }} />
          )}
          <span>Nodejs</span>
        </FolderList>
        <FileBox disabled={!folderAry.includes(1)}>
          <FileList onClick={fs1} fileSelect={fileSelect === 1}>
            <Javascript width={16} height={16} style={{ marginLeft: 5 }} />
            <span>Javascript</span>
          </FileList>
          <FileList onClick={fs2} fileSelect={fileSelect === 2}>
            <Typescript width={16} height={16} style={{ marginLeft: 5 }} />
            <span>Typescript</span>
          </FileList>
          <FileList onClick={fs3} fileSelect={fileSelect === 3}>
            <NestJs width={16} height={16} style={{ marginLeft: 5 }} />
            <span>NestJs</span>
          </FileList>
          <FileList onClick={fs4} fileSelect={fileSelect === 4}>
            <React width={16} height={16} style={{ marginLeft: 5 }} />
            <span>React</span>
          </FileList>
          <FileList onClick={fs5} fileSelect={fileSelect === 5}>
            <ReactNative width={16} height={16} style={{ marginLeft: 5 }} />
            <span>React-Native</span>
          </FileList>
          <FileList onClick={fs6} fileSelect={fileSelect === 6}>
            <Graphql width={16} height={16} style={{ marginLeft: 5 }} />
            <span>GraphQL</span>
          </FileList>
          <FileList onClick={fs7} fileSelect={fileSelect === 7}>
            <Typeorm width={16} height={16} style={{ marginLeft: 5 }} />
            <span>Typeorm</span>
          </FileList>
        </FileBox>
        <FolderList onClick={secondFolder}>
          <Chevron icon={faChevronDown} include={folderAry.includes(2)} />
          {folderAry.includes(2) ? (
            <FolderPythonOpen
              width={16}
              height={16}
              style={{ marginLeft: 5 }}
            />
          ) : (
            <FolderPython width={16} height={16} style={{ marginLeft: 5 }} />
          )}
          <span>Python</span>
        </FolderList>
        <FolderList onClick={thirdFolder}>
          <Chevron icon={faChevronDown} include={folderAry.includes(3)} />
          {folderAry.includes(3) ? (
            <FolderDatabaseOpen
              width={16}
              height={16}
              style={{ marginLeft: 5 }}
            />
          ) : (
            <FolderDatabase width={16} height={16} style={{ marginLeft: 5 }} />
          )}
          <span>Database</span>
        </FolderList>
      </Contents>
      <BottomBox onClick={secondCnt}>
        <Chevron icon={faChevronDown} include={CntAry.includes(2)} />
        <span>개요</span>
      </BottomBox>
      <BottomBox onClick={thirdCnt}>
        <Chevron icon={faChevronDown} include={CntAry.includes(3)} />
        <span>타임라인</span>
      </BottomBox>
    </Container>
  );
}

export default MenuFile;
