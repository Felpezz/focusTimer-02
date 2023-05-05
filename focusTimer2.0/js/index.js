import  Timer  from "./timer.js"
import  Controls  from "./controls.js"
import Events from "./events.js"
import {
  fireAudio,
  forestAudio,
  peopleAudio,
  rainAudio
} from "./audio.js"

const clickToPlay = document.querySelector('.play')
const clickToStop = document.querySelector('.stop')
const clickToAdd = document.querySelector('.addMinutes')
const clickToRemove = document.querySelector('.removeMinutes')
const minutesRelative = document.querySelector('.minutes')
const secondsRelative = document.querySelector('.seconds')
const forestSoundOn = document.querySelector('.forest')
const rainSoundOn = document.querySelector('.rain')
const conversationSoundOn = document.querySelector('.conversationSounds')
const fireSoundOn = document.querySelector('.campingFire')
const setTimer = document.querySelector('.setTimer')

let svgSelector = [
 document.querySelector('.play svg path'),
 document.querySelector('.stop svg path'),
 document.querySelector('.addMinutes svg path'),
 document.querySelector('.removeMinutes svg path'),
 
 document.querySelector('.forest svg path'),
 document.querySelector('.rain svg path'),
 document.querySelector('.conversationSounds svg path'),  
 document.querySelector('.campingFire svg path'),
 
]

const controls = Controls({
  svgSelector,
})

export function forestSelector() {
  if(svgSelector[4].style.fill = "white") {
  svgSelector[5].style.fill = "#323238"
  svgSelector[6].style.fill = "#323238"
  svgSelector[7].style.fill = "#323238"

  rainSoundOn.style.backgroundColor = "#d7d7dc"
  conversationSoundOn.style.backgroundColor = "#d7d7dc"
  fireSoundOn.style.backgroundColor = "#d7d7dc"

  forestAudio.play()
  rainAudio.pause()
  fireAudio.pause()
  peopleAudio.pause()
  }
}
export function rainSelector() {
  if(svgSelector[5].style.fill = "white") {

  svgSelector[4].style.fill = "#323238"
  svgSelector[6].style.fill = "#323238"
  svgSelector[7].style.fill = "#323238"

  forestSoundOn.style.backgroundColor = "#d7d7dc"
  conversationSoundOn.style.backgroundColor = "#d7d7dc"
  fireSoundOn.style.backgroundColor = "#d7d7dc"

  rainAudio.play()
  forestAudio.pause()
  fireAudio.pause()
  peopleAudio.pause()
}
}
export function conversationSelector() {
  if(svgSelector[6].style.fill = "white") {

  svgSelector[5].style.fill = "#323238"
  svgSelector[4].style.fill = "#323238"
  svgSelector[7].style.fill = "#323238"

  rainSoundOn.style.backgroundColor = "#d7d7dc"
  forestSoundOn.style.backgroundColor = "#d7d7dc"
  fireSoundOn.style.backgroundColor = "#d7d7dc"

  rainAudio.pause()
  forestAudio.pause()
  fireAudio.pause()
  peopleAudio.play()
  }
}
export function fireSelector(){
  if( svgSelector[7].style.fill = "white") {
    svgSelector[5].style.fill = "#323238"
    svgSelector[6].style.fill = "#323238"
    svgSelector[4].style.fill = "#323238"
  
    rainSoundOn.style.backgroundColor = "#d7d7dc"
    conversationSoundOn.style.backgroundColor = "#d7d7dc"
    forestSoundOn.style.backgroundColor = "#d7d7dc"
  
    rainAudio.pause()
    forestAudio.pause()
    fireAudio.play()
    peopleAudio.pause()
   
  }
}

const timer = Timer({
  minutesRelative,
  secondsRelative,
  resetControls: controls.reset
})

export {
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
  minutesRelative,
  secondsRelative
}

Events({
  controls,
  timer
})


