import React from 'react';
import { AppWrapper, ContainerWrapper, Item, MainText, TopNavbar } from './styledComponents'

const sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function App() {
  return (
    <AppWrapper>
      <TopNavbar>
        <div className="start-nav">A</div>
        <div className="middle-nav">
          <div className="menu-item">B</div>
          <div className="menu-item">C</div>
          <div className="menu-item">D</div>
          <div className="menu-item">E</div>
          <div className="menu-item">F</div>
        </div>
        <div className="end-nav">
          <div className="action">G</div>
          <div className="action responsive">H</div>
        </div>
      </TopNavbar>
      <ContainerWrapper>
        <MainText>
          <h3>What is Lorem Ipsum?</h3>
          {sampleText}
        </MainText>
        <div className="card-wrapper">
          <div className="card-wrapper">
            <Item color="red">1</Item>
            <Item color="red">2</Item>
          </div>
          <div className="card-wrapper">
            <Item color="brown">3</Item>
            <Item color="brown">4</Item>
          </div>
        </div>
      </ContainerWrapper>
    </AppWrapper>
  );
}

export default App;
