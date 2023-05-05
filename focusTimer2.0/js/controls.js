import {minutesRelative} from "./index.js"
import Timer from "./timer.js"

export default function Controls({
  svgSelector,
}){

  let newMinutes = 0

  function getMinutes(){
    newMinutes = prompt('Digite o tempo desejado:')
    if(!newMinutes) {
      return false
    }
    return newMinutes
  } 

  function play(){
    svgSelector[0].style.fill =  "#02799D"
    svgSelector[1].style.fill = "#323238"
    svgSelector[2].style.fill = "#323238"
    svgSelector[3].style.fill = "#323238"
  }

  function pause(){
    svgSelector[1].style.fill = "#02799D"
    svgSelector[0].style.fill =  "#323238"
    svgSelector[2].style.fill =  "#323238"
    svgSelector[3].style.fill =  "#323238"
  }

  function addMinutes(){
    svgSelector[2].style.fill = "#02799D"
    svgSelector[0].style.fill = "#323238"
    svgSelector[1].style.fill = "#323238"
    svgSelector[3].style.fill = "#323238"

    newMinutes = Number(newMinutes) + 5
    console.log(minutesRelative)

    minutesRelative.textContent = String(newMinutes).padStart(2, "0")

    if(newMinutes == 0) {
      newMinutes = Number(newMinutes) + 5
    }
    return newMinutes
  }

  function lessMinutes(){
    svgSelector[3].style.fill = "#02799D"
    svgSelector[0].style.fill = "#323238"
    svgSelector[1].style.fill = "#323238"
    svgSelector[2].style.fill = "#323238"

    newMinutes = Number(newMinutes) - 5
    minutesRelative.textContent = String(newMinutes).padStart(2, "0")

    if(newMinutes <= 0 ) {
      minutesRelative.textContent =  String(0).padStart(2, "0")
      newMinutes = 0
    }
  }

  function reset() {
    svgSelector[0].style.fill = "#323238"
    svgSelector[1].style.fill = "#323238"
    svgSelector[2].style.fill = "#323238"
    svgSelector[3].style.fill = "#323238"
  }

  

  return {
    getMinutes,
    pause,
    play,
    reset,
    addMinutes,
    lessMinutes
    }

}