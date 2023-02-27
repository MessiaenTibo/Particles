import "./style/style.css"
import "./style/reset.css"
import dom from "./script/dom"

import { particleSystem } from "./script/particleSystem"

const ctx = dom.setup('#particleContainer')

if(ctx)
{
  particleSystem.passContext(ctx)
  particleSystem.generate(1000)
  particleSystem.draw()
  particleSystem.update()
  particleSystem.animate()
}

//mouse click event
document.addEventListener('click', (e) => {
  particleSystem.moveToMouse(e.clientX, e.clientY)
})

//mouse move event
document.addEventListener('mousemove', (e) => {
  //if mouse is pressed
  if(e.buttons == 1)
  {
    particleSystem.moveToMouse(e.clientX, e.clientY)
  }
})

// Module voor particleSystem (revealing module pattern - iife - self-invoking function)
