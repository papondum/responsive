import styled from 'styled-components'
export const AppWrapper = styled.div`
  height: 100vh;
  background-color: #aaa;
  grid-gap: 100%;
  display: ${props=>props.display||'block'};
  flex-direction: ${props=>props.direction||'column'};
`

export const TopNavbar = styled.div`
  display: flex;
  border-bottom-color: rgb(32, 28, 41);
  background: #ff7043;
  height: 20px;
  .start-nav { flex: 0; padding: 0 40px; }
  .middle-nav {
    flex: 1;
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
  }
  .end-nav {
    .responsive {
      display: none;
    }
    .action {
      padding: 0 22px;
    }
  }
  @media only screen and (max-width: 950px) {
    --nav-height: 20px;
    .menu-wrapper {
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
    .open {
      opacity: 1;
      visibility: visible;
    }
    .menu-item {
      &:hover {
        background: #aaa;
      }
    }
    .end-nav {
      display: flex;
      .responsive {
        display: block;
      }
  }
`

export const LeftNavbar = styled.div`
`
