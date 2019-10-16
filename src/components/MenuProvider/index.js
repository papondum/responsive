import React from 'react'
import { MenuProviderWrapper } from './styledComponents'
import MenuBar from './MenuBar'

class MenuProvider extends React.Component {
  barTypeChecker(type) {
    let result = 'row'
    switch (type) {
      case 'left':
        result = 'row'
        break;
      case 'top':
      result = 'column'
        break;
      default:

    }
    return result
  }
  render() {
    const { type } = this.props
    const barType = this.barTypeChecker(type)
    return (
      <MenuProviderWrapper direction={barType}>
        {this.props.children.map((child, index) => React.cloneElement(child, {key: index, type}))}
      </MenuProviderWrapper>
    )
  }
}
MenuProvider.MenuBar = MenuBar
export default MenuProvider
