import React from 'react'
import { AppWrapper } from '../TopMenu/styledComponents'
import Content from '../../components/Content'
import { LeftMenuWrapper } from './styledComponents'
class LeftMenu extends React.Component {
  constructor(props) {
    super(props)
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.state = {
      menuSmallScreen: ''
    }
  }

  openMenu() {
    this.setState({menuSmallScreen: 'open'})
  }

  closeMenu() {
    this.setState({menuSmallScreen: ''})
  }

  render() {
    return (
      <AppWrapper direction={'row'} display={'flex'}>
        <LeftMenuWrapper>
          <div className="start-nav">A</div>
          <div className={`middle-nav ${this.state.menuSmallScreen}`}>
            <div className="menu-item">B</div>
            <div className="menu-item">C</div>
            <div className="menu-item">D</div>
            <div className="menu-item">E</div>
            <div className="menu-item">F</div>
          </div>
          <div className="end-nav">
            <div className="menu-toggle" onClick={this.openMenu} onBlur={this.closeMenu} tabIndex={0}>G</div>
          </div>
        </LeftMenuWrapper>
        <Content />
      </AppWrapper>
    )
  }
}
export default LeftMenu
//
// const nav = <TopNavbar>
//   <div className="start-nav">A</div>
//   <div className="middle-nav">
//     <div className={`menu-wrapper ${this.state.menuState}`}>
//       <div className="menu-item">B</div>
//       <div className="menu-item">C</div>
//       <div className="menu-item">D</div>
//       <div className="menu-item">E</div>
//       <div className="menu-item">F</div>
//     </div>
//   </div>
//   <div className="end-nav">
//     <div className="action">G</div>
//     <div className="action responsive" tabIndex={0} onClick={this.openMenu} onBlur={this.closeMenu}>H</div>
//   </div>
// </TopNavbar>
