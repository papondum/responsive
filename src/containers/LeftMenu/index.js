import React from 'react'
import Content from '../../components/Content'
import MenuProvider from '../../components/MenuProvider'
const { MenuBar } = MenuProvider
const { MenuItem } = MenuBar
class LeftMenu extends React.Component {
  render() {
    return (
      <MenuProvider type='left'>
        <MenuBar menuType='side' logoContent={<div className="start-nav">A</div>}>
          <MenuItem>B</MenuItem>
          <MenuItem>C</MenuItem>
          <MenuItem>D</MenuItem>
          <MenuItem>E</MenuItem>
          <MenuItem>F</MenuItem>
        </MenuBar>
        <Content />
      </MenuProvider>
    )
  }
}
export default LeftMenu
