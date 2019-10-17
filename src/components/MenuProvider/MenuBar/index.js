import React from 'react'
import { LeftMenuList, TopMenuList, MenuBarWrapper } from './styledComponents'
import Menu from './Menu'
class MenuBar extends React.Component {
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

  menutypeRender(type) {
    let result
    switch (type) {
      case 'left':
        result = (
          <LeftMenuList type={this.props.menuType} className={this.state.menuSmallScreen}>
            {this.props.children}
          </LeftMenuList>
        )
        break;
      case 'top':
       result = (
         <TopMenuList className={this.state.menuSmallScreen}>
           {this.props.children}
         </TopMenuList>
       )
        break;
      default:

    }
    return result
  }
  barTypeChecker(type) {
    let result = 'row'
    switch (type) {
      case 'left':
        result = 'column'
        break;
      case 'top':
      result = 'row'
        break;
      default:

    }
    return result
  }
  render() {
    const barType = this.barTypeChecker(this.props.type)
    return (
      <MenuBarWrapper direction={barType} type={this.props.menuType}>
        {this.props.logoContent}
        {this.menutypeRender(this.props.type)}
        <div className="end-nav">
          <div className="menu-toggle" onClick={this.openMenu} onBlur={this.closeMenu} tabIndex={0}>G</div>
        </div>
      </MenuBarWrapper>
    )
  }
}

MenuBar.MenuItem = Menu
export default MenuBar
