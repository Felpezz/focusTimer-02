
import { fireAudio, forestAudio, peopleAudio, rainAudio } from "./audio.js"
import {
  clickToAdd,
  clickToPlay,
  clickToRemove,
  clickToStop,
  setTimer,
  fireSoundOn,
  forestSoundOn,
  rainSoundOn,
  conversationSoundOn,
  svgSelector,
  fireSelector,
  forestSelector,
  rainSelector,
  conversationSelector,
  minutesRelative
} from "./index.js"

export default function({
  controls,
  timer,
}){

  let clickNumber = 0
  let lastClicked = null

  setTimer.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
    if(!newMinutes) {
      timer.reset()
      return
    }
    timer.updateMinutes(newMinutes)
    timer.updateDisplay(newMinutes, 0)
  }) 
  
  clickToPlay.addEventListener('click', function(){
    controls.play()
    timer.countDown()
  })
  
  clickToStop.addEventListener('click', function(){
    timer.hold()
    controls.pause()
  })
  
  clickToAdd.addEventListener('click', function(){
    controls.addMinutes()
  })
  
  clickToRemove.addEventListener('click', function(){
    controls.lessMinutes()
  })
  
  function forestSound(){
    svgSelector[4].style.fill = "white"
    forestSoundOn.style.backgroundColor = "#02799D"
    forestSelector()
  }
    
  function rainSound() {
    svgSelector[5].style.fill = "white"
    rainSoundOn.style.backgroundColor = "#02799D"
    rainSelector()
  }
  
  function fireSound() {
    svgSelector[7].style.fill = "white"
    fireSoundOn.style.backgroundColor = "#02799D"
    fireSelector()
  
  }

  function conversationSound(){
    svgSelector[6].style.fill = "white"
    conversationSoundOn.style.backgroundColor = "#02799D"
    conversationSelector()
  } 
  


  function eventClickNumber(callback1, callback2, callback3, callback4){
    clickNumber++
    console.log(clickNumber)
    if(clickNumber === 1) {
       if(typeof callback1 === 'function'){
        callback1()
       } else if(typeof callback2 === 'function'){
        callback2()
       } else if(typeof callback3 === 'function'){
        callback3()
       } else if(typeof callback4 === 'function'){
        callback4()
       }
      
    } if(clickNumber === 2) {
      svgSelector[4].style.fill = "#323238"
      svgSelector[5].style.fill = "#323238"
      svgSelector[6].style.fill = "#323238"
      svgSelector[7].style.fill = "#323238"

      forestSoundOn.style.backgroundColor =  "#d7d7dc"
      rainSoundOn.style.backgroundColor = "#d7d7dc"
      conversationSoundOn.style.backgroundColor = "#d7d7dc"
      fireSoundOn.style.backgroundColor = "#d7d7dc"


      fireAudio.pause()
      peopleAudio.pause()
      rainAudio.pause()
      forestAudio.pause()
      clickNumber = 0
    } 
  }

  fireSoundOn.addEventListener('click', () =>{
    if(lastClicked !== fireSoundOn) {
      clickNumber = 0
    }
    lastClicked = fireSoundOn
    eventClickNumber(fireSound)
  })

  conversationSoundOn.addEventListener('click', () => {
    if(lastClicked !== conversationSoundOn) {
      clickNumber = 0
    }
    lastClicked = conversationSoundOn
    eventClickNumber(conversationSound)
  })

  rainSoundOn.addEventListener('click', () => {
    if(lastClicked !== rainSoundOn) {
      clickNumber = 0
    }
    lastClicked = rainSoundOn
    eventClickNumber(rainSound)
  })

  forestSoundOn.addEventListener('click', () => {
    if(lastClicked !== forestSoundOn) {
      clickNumber = 0
    }
    lastClicked = forestSoundOn
    eventClickNumber(forestSound)
  })

}
