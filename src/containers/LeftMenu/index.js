import React from 'react'
import { AppWrapper } from '../TopMenu/styledComponents'
import Content from '../../components/Content'
import { LeftMenuWrapper, TopWrapperMenu } from './styledComponents'
class LeftMenu extends React.Component {
  render() {
    return (
      <AppWrapper direction={'row'} display={'flex'}>
        <TopWrapperMenu>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
        </TopWrapperMenu>
        <LeftMenuWrapper>
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
        </LeftMenuWrapper>
        <Content />
      </AppWrapper>
    )
  }
}
export default LeftMenu
