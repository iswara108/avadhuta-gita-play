import React, { useState, useReducer } from 'react'
import styled from 'styled-components'

import { gurusList, falseGurus, shuffleArray } from '../lib/gurusList'

const StyledMainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-flow: column wrap;
  margin: -10px;
  max-height: 100vh;
  max-width: 100%;
  font-family: 'Indie Flower', cursive;
  font-weight: 700;
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

const StyledCongratulations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  color: darkRed;
  font-family: arial;
  height: 100vh;
  text-align: center;
`

function App() {
  function initialState(initialGurus) {
    return {
      guessedSoFar: 0,
      gurus: initialGurus,
      falseGurusAdded: false
    }
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'GUESS':
        if (falseGurus.some(fake => fake === action.payload)) return state
        const newState = {
          ...state,
          guessedSoFar: state.guessedSoFar + 1,
          gurus: state.gurus.filter(guru => guru !== action.payload),
          prevState: state
        }
        if (
          gurusList.length - newState.guessedSoFar <= 9 &&
          !state.falseGurusAdded
        ) {
          newState.gurus = shuffleArray(newState.gurus.concat(falseGurus))
          newState.falseGurusAdded = true
        }
        return newState
      case 'KEY_DOWN': {
        if (action.payload === 'Backspace' && state.prevState) {
          return state.prevState
        } else return state
      }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, gurusList, initialState)
  const guessesLeft = gurusList.length - state.guessedSoFar

  function guess(guru) {
    dispatch({ type: 'GUESS', payload: guru })
  }

  function keyDown(key) {
    dispatch({ type: 'KEY_DOWN', payload: key })
  }

  return (
    <div
      style={{ margin: '10px' }}
      onKeyDown={e => keyDown(e.key)}
      tabIndex={0}
    >
      {guessesLeft ? (
        <>
          <StyledMainDiv>
            {state.gurus.map(guru => (
              <StyledChildDiv key={guru} onClick={() => guess(guru)}>
                <div>{guru}</div>
              </StyledChildDiv>
            ))}
          </StyledMainDiv>
          <footer>{guessesLeft} left to guess...</footer>
        </>
      ) : (
        <>
          <StyledCongratulations>
            <div>Congratulations! All teachers have been found.</div>
          </StyledCongratulations>
          <div
            style={{
              position: 'absolute',
              width: '100vw',
              textAlign: 'center',
              bottom: '20px'
            }}
          >
            {gurusList.join(', ')}
          </div>
        </>
      )}
    </div>
  )
}

export default App
