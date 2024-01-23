import './App.css'
import setPage from './js/turns/turns.js'
import { getTheme,setTheme } from './main.jsx'

function optionOnClick(option){
  setTheme(option[1])
  console.log(option[1])
  console.log(getTheme())
  document.getElementById("next").hidden=false;
}

function Option(option){

  let optionStyle={
    color:'blue',
    margin:'4pt',
    borderColor:'black',
    backgroundColor:'whitesmoke'
    
  }

  return(
    <button style={optionStyle} onClick={()=>{optionOnClick(option)}}>{option[0]}</button>
  )
}

function App(title,question1,question2,options,might,stability) {
  

  return (
    <>
      <h1>{title}</h1>
      <h3>{question1}</h3>
      <h4>{question2}</h4>
      {Option(options[0])}
      <br></br>
      {Option(options[1])}
      <br></br>
      {Option(options[2])}
      <br></br>
      <button id="next" hidden={true} onClick={()=>{setPage(might,stability);document.getElementById("next").hidden=true;}}>Time Marches On</button>
    </>
  )
}

export {App}