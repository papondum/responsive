import styled from 'styled-components'
export const LeftMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background: #4fc3f7;
  min-width: 140px;
  .menu-toggle { display: none; }
  .menu-item {
    border-bottom: 1px solid #444;
    &:hover {
      background: #aaa;
    }
  }
  @media only screen and (max-width: 700px) {
    --nav-height: 20px;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100%;
    background: #4fc3f7;
    justify-content: space-between;
    .middle-nav {
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
    .menu-toggle {
      display: block;
    }
    .open {
      opacity: 1;
      visibility: visible;
    }
  }
`
