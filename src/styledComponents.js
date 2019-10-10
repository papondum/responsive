import styled from 'styled-components'
export const AppWrapper = styled.div`
  height: 100vh;
  /* width: 100vw; */
  background-color: #aaa;
  grid-gap: 100%;
`
export const ContainerWrapper = styled.div`
  background: blue;
  margin: auto;
  max-width: 1280px;
  padding: 4rem;
  .card-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: .5rem;
  }
`
export const Item = styled.div`
  background: ${props=>props.color};
  height: 160px;
  /* test */
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainText = styled.div`
  max-width: 780px;
  margin: auto;
  padding-bottom: 30px;
`
export const TopNavbar = styled.div`
  display: flex;
  border-bottom-color: rgb(32, 28, 41);
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