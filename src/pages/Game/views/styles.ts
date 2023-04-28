import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  height: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3%;
  margin: 0 5%;
  flex-wrap: wrap;
`

export const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #3e3e3e;
`
