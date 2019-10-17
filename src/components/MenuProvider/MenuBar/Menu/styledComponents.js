import styled from 'styled-components'
export const MenuItemWrapper = styled.div`
  flex: 1;
  border-right: 1px solid #201c29;
  &:first-child {
    border-left: 1px solid rgb(32, 28, 41);
  }
  border-bottom: 1px solid #444;
  &:hover {
    background: #aaa;
  }
`
