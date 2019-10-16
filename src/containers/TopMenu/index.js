import React from 'react'
import Content from '../../components/Content'
import MenuProvider from '../../components/MenuProvider'
class TopMenu extends React.Component {
  render() {
    return (
      <MenuProvider type='top'>
        <MenuProvider.MenuBar logoContent={<div className="start-nav">A</div>}>
          <div className="menu-item">B</div>
          <div className="menu-item">C</div>
          <div className="menu-item">D</div>
          <div className="menu-item">E</div>
          <div className="menu-item">F</div>
        </MenuProvider.MenuBar>
        <Content />
      </MenuProvider>
    )
  }
}
export default TopMenu
