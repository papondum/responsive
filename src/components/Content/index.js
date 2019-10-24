import React from 'react'
import { ContainerWrapper, MainText, Item } from './styledComponents'
const sampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const Content = () => (
  <ContainerWrapper>
    <MainText>
      <h3>What is Lorem Ipsum?</h3>
      {sampleText}
    </MainText>
    <div className="card-wrapper">
      <div className="card-wrapper">
        <Item color="#e57373"
          initial="hidden"
          animate="visible"
          variants={{hidden: {opacity:0}, visible: {opacity: 1}}}
        >
          1
        </Item>
        <Item color="#e57373"
          animate={{ scale: [0, 1] }}
          transition={{ duration: 0.25 }}
        >
          2
        </Item>
      </div>
      <div className="card-wrapper">
        <Item color="#64b5f6">3</Item>
        <Item color="#64b5f6">4</Item>
      </div>
    </div>
  </ContainerWrapper>
)

export default Content
