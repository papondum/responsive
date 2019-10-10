import styled from 'styled-components'
export const LeftMenuWrapper = styled.div`
  background: #4fc3f7;
  min-width: 140px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`
export const TopWrapperMenu = styled.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    background: #4fc3f7;
  }
`
