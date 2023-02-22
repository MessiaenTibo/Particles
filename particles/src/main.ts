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


// Module voor particleSystem (revealing module pattern - iife - self-invoking function)
