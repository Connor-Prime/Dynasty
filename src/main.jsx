import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import setPage from './js/turns/turns.js'

let root = ReactDOM.createRoot(document.getElementById('root'));

function renderPage(title,question1, question2, options){
  
  root.render(
    <React.StrictMode>
      {App(title,question1, question2, options)}
    </React.StrictMode>,
  )
}

let turn = -1

let theme ="";


export function setTheme(_theme){
  theme=_theme
}

export function getTheme(){
  return theme
}

export function getTurn(){
  return turn;
}

export function addTurn(){
  turn=turn+1;
  if (turn > 2){
      turn = 1
  }
  return turn
}

let stability=5;
let might = 5;

export const setMight =(_might)=>{
  might=_might;
}

export const setStability =(_stability)=>{
  stability=_stability;
}


export function changeTurn(){
  setPage(5,5)
}

setPage(5,5)

export {renderPage}