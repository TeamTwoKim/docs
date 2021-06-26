import { useState } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuFile from "./components/MenuFile";
import GettingStart from "./components/screens/GettingStart";
import GraphQL from "./components/screens/GraphQL";
import Javascript from "./components/screens/Javascript";
import NestJs from "./components/screens/NestJs";
import React from "./components/screens/React";
import ReactNative from "./components/screens/ReactNative";
import Typeorm from "./components/screens/Typeorm";
import Typescript from "./components/screens/Typescript";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 32px;
  padding-bottom: 20px;
`;

function Blog() {
  const [menuSelect, setMenuSelect] = useState(1);
  const menuSelectFn = (id) => {
    if (menuSelect === id) {
      setMenuSelect(0);
    } else {
      setMenuSelect(id);
    }
  };

  const [contentsSelect, setContentsSelect] = useState([1]);
  const contentsSelectFn = (id) => {
    if (contentsSelect.includes(id)) {
      const result = contentsSelect.filter((element) => element !== id);
      setContentsSelect(result);
    } else if (!contentsSelect.includes(id)) {
      setContentsSelect([...contentsSelect, id]);
    }
  };

  const [folderSelect, setFolderSelect] = useState([0]);
  const folderSelectFn = (id) => {
    if (folderSelect.includes(id)) {
      const result = folderSelect.filter((element) => element !== id);
      setFolderSelect(result);
    } else if (!folderSelect.includes(id)) {
      setFolderSelect([...folderSelect, id]);
    }
  };

  const [fileSelect, setFileSelect] = useState(0);

  return (
    <Container>
      <Header />
      <MainContainer>
        <Menu
          menuId={menuSelect}
          firstClk={() => menuSelectFn(1)}
          secondClk={() => menuSelectFn(2)}
          thirdClk={() => menuSelectFn(3)}
        />
        <MenuFile
          menuId={menuSelect}
          CntAry={contentsSelect}
          firstCnt={() => contentsSelectFn(1)}
          secondCnt={() => contentsSelectFn(2)}
          thirdCnt={() => contentsSelectFn(3)}
          folderAry={folderSelect}
          firstFolder={() => folderSelectFn(1)}
          secondFolder={() => folderSelectFn(2)}
          thirdFolder={() => folderSelectFn(3)}
          fileSelect={fileSelect}
          fs1={() => setFileSelect(1)}
          fs2={() => setFileSelect(2)}
          fs3={() => setFileSelect(3)}
          fs4={() => setFileSelect(4)}
          fs5={() => setFileSelect(5)}
          fs6={() => setFileSelect(6)}
          fs7={() => setFileSelect(7)}
        />
        {fileSelect === 1 ? (
          <Javascript></Javascript>
        ) : fileSelect === 2 ? (
          <Typescript></Typescript>
        ) : fileSelect === 3 ? (
          <NestJs xclick={() => setFileSelect(0)}></NestJs>
        ) : fileSelect === 4 ? (
          <React></React>
        ) : fileSelect === 5 ? (
          <ReactNative></ReactNative>
        ) : fileSelect === 6 ? (
          <GraphQL></GraphQL>
        ) : fileSelect === 7 ? (
          <Typeorm></Typeorm>
        ) : (
          <GettingStart></GettingStart>
        )}
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default Blog;
