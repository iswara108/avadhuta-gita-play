import React, { useState } from 'react'
import styled from 'styled-components'

const StyledMainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  flex: 0 0 30%;
  height: calc(24em + 160px);
  width: 66%;
  max-width: 100%;
  font-family: cursive;
  font-size: 2em;
`

const StyledChildDiv = styled.div`
  width: calc(33% - 30px);
  min-width: ${document.body.clientWidth / 3 - 20}px;
  height: 3em;
  text-align: center;
  margin: 10px;
  background-color: #fefefe;
  box-shadow: 1px 1px #ddd;
  cursor: pointer;

  :hover {
    color: grey;
  }
`

function App() {
  const [gurus, setGurus] = useState([
    'Earth',
    'Water',
    'Air',
    'Fire',
    'Sky',
    'Moon',
    'Sun',
    'Pigeon',
    'Python',
    'Ocean',
    'Moth',
    'Bee',
    'Honey-gatherer',
    'Elephant',
    'Deer',
    'Fish',
    'Dancing-girl Pingala',
    'Raven',
    'Child',
    'Maiden',
    'Serpent',
    'An arrow-maker',
    'Spider',
    'Beetle'
  ])

  return (
    <StyledMainDiv>
      {gurus.map((a, i) => (
        <StyledChildDiv
          key={i}
          onClick={() => setGurus(gurus => gurus.filter((a, j) => i !== j))}
        >
          {gurus[i]}
        </StyledChildDiv>
      ))}
    </StyledMainDiv>
  )
}

export default App
