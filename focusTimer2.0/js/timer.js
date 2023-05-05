import { clickToAdd } from "./index.js"
import controls from "./controls.js" 

export default function Timer({
  minutesRelative,
  secondsRelative,
  resetControls,
}){

  let timerTimeout
  let minutes = Number(minutesRelative.textContent)

  function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesRelative.textContent = String(newMinutes).padStart(2, "0")
  secondsRelative.textContent = String(seconds).padStart(2, "0") 
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeout)
  }

function countDown(){
  timerTimeout = setTimeout(function(){
  let seconds = Number(secondsRelative.textContent)
  let minutes = Number(minutesRelative.textContent)
  let isFinished =  minutes <= 0 && seconds == 0 

  updateDisplay(minutes, 0)
  
  if(isFinished) {
    resetControls()
    updateDisplay()
    return
  }

  if(seconds <= 0 ) {
    seconds = 2
    --minutes
  }

  if(minutes <= minutes){
    clickToAdd.addEventListener('click', function(){
    minutes += 5
    minutesRelative.textContent = String(minutes).padStart(2,'0')
    })
   }
  updateDisplay(minutes, String(seconds - 1))
  countDown()
 }, 1000)
}

function updateMinutes(newMinutes){
  minutes = newMinutes
}

function hold() {
  clearTimeout(timerTimeout)
}

    return{
      countDown,
      updateDisplay,
      updateMinutes,
      hold,
      reset
    }
}
