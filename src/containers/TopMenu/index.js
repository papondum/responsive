import React from 'react';
import { AppWrapper, TopNavbar } from './styledComponents'
import Content from '../../components/Content'

class TopMenu extends React.Component {
  constructor(props) {
    super(props)
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.state = { menuState: '' }
  }

  openMenu() {
    this.setState({menuState: 'open'})
  }
  closeMenu() {
    this.setState({menuState: ''})
  }

  render() {
    return (
      <AppWrapper>
        <TopNavbar>
          <div className="start-nav">A</div>
          <div className="middle-nav">
            <div className={`menu-wrapper ${this.state.menuState}`}>
              <div className="menu-item">B</div>
              <div className="menu-item">C</div>
              <div className="menu-item">D</div>
              <div className="menu-item">E</div>
              <div className="menu-item">F</div>
            </div>
          </div>
          <div className="end-nav">
            <div className="action">G</div>
            <div className="action responsive" tabIndex={0} onClick={this.openMenu} onBlur={this.closeMenu}>H</div>
          </div>
        </TopNavbar>
        <Content />
      </AppWrapper>
    );
  }
}

export default TopMenu;
