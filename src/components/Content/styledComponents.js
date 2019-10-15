import styled from 'styled-components'
export const ContainerWrapper = styled.div`
  background: #a5d6a7;
  margin: 0 auto;
  max-width: 1280px;
  padding: 4rem;
  flex:1;
  overflow: auto;
  /* height: 100%;
  box-sizing: border-box; */
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
  margin-bottom: 30px;
  background: #f48fb1;
`
