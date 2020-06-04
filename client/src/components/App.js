import React, { useState } from 'react'
import styled from 'styled-components'

import gurusList from '../lib/gurusList'

const StyledMainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-flow: column wrap;
  margin: -10px;
  height: calc(24em + 160px);
  max-width: 100%;
  font-family: cursive;
  font-size: 2em;
`

const StyledChildDiv = styled.div`
  width: calc(33% - 10px);
  height: 3em;
  text-align: center;
  margin: 10px;
  color: #0d00cc;
  background-color: honeydew;
  box-shadow: 1px 1px #ddd;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: darkRed;
    box-shadow: none;
    transform: translate(1px, 1px);
  }
`

function App() {
  const [gurus, setGurus] = useState(gurusList)

  return (
    <div style={{ margin: '10px' }}>
      <StyledMainDiv>
        {gurus.map((a, i) => (
          <StyledChildDiv
            key={i}
            onClick={() => setGurus(gurus => gurus.filter((a, j) => i !== j))}
          >
            <div>{gurus[i]}</div>
          </StyledChildDiv>
        ))}
      </StyledMainDiv>
    </div>
  )
}

export default App
