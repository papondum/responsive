import React from 'react'
import Content from '../../components/Content'
import MenuProvider from '../../components/MenuProvider'
const { MenuBar } = MenuProvider
const { MenuItem } = MenuBar
class TopMenu extends React.Component {
  render() {
    return (
      <MenuProvider type='top'>
        <MenuBar logoContent={<div className="start-nav">A</div>}>
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
export default TopMenu
