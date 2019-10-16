import styled from 'styled-components'
export const MenuBarWrapper = styled.div`
  display: flex;
  flex-direction: ${props=>props.direction};
  background: #4fc3f7;
  min-width: 140px;
  .menu-toggle { display: none; }
  .menu-item {
    border-bottom: 1px solid #444;
    &:hover {
      background: #aaa;
    }
  }
  .start-nav { flex: 0; padding: 0 40px; }
  @media only screen and (max-width: 700px) {
    --nav-height: 20px;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100%;
    background: #4fc3f7;
    justify-content: space-between;
    .menu-toggle {
      display: block;
    }
    .open {
      opacity: 1;
      visibility: visible;
    }
  }
`
export const LeftMenuList = styled.div`
  --nav-height: 20px;
  @media only screen and (max-width: 700px) {
    overflow: auto;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .2s;
    transition: .2s;
    position: absolute;
    top: var(--nav-height);
    right: 0;
    background: #fff;
    z-index: 1;
    width: 200px;
    flex-direction: column;
  }
`
export const TopMenuList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  .menu-wrapper {
    display: flex;
  }
  .menu-item {
    flex: 1;
    border-right: 1px solid #201c29;
    &:first-child {
      border-left: 1px solid rgb(32, 28, 41);
    }
  }
  @media only screen and (max-width: 700px) {
    overflow: auto;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .2s;
    transition: .2s;
    position: absolute;
    top: var(--nav-height);
    right: 0;
    background: #fff;
    z-index: 1;
    width: 200px;
    height: calc(30vh - var(--nav-height));
    flex-direction: column;
  }
`
