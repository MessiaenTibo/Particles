import { Colors } from "../interfaces/Colors"
import { Particle } from "../script/Particle"

export const particleSystem = (() => {
    //TODO: generate x particles, random on the canvas
    // Make this a promise, so we can await it
    const particles: Particle[] = []
    let ctx: CanvasRenderingContext2D

    const passContext = (context: CanvasRenderingContext2D) => {
        ctx = context
    }

    const generate = (amount = 100) => {
        // new Promise
        for (let i = 0; i < amount; i++) {
            particles.push(new Particle(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height))
        }

    }

    //TODO: draw particles
    const draw = () => {
        particles.forEach(particle => {
            ctx.fillStyle = particle.color
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fill()
        })
    }

    //TODO: update particles (move them)
    const update = () => {
        for (const p of particles)
        {
            if(p.x < (p.size/2) || p.x > (ctx.canvas.width - (p.size/2)))
            {
                p.dx = -p.dx
            }

            if(p.y < (p.size/2) || p.y > (ctx.canvas.height - (p.size/2)))
            {
                p.dy = -p.dy
            }
            p.x = p.x + p.dx
            p.y = p.y + p.dy
        }
    }

    // Move all particles to mouse position
    const moveToMouse = (x: number, y: number) => {
        for (const p of particles)
        {
            p.x = x
            p.y = y
        }
    }

    const animate = () => {
        clear()
        update()
        draw()
        requestAnimationFrame(animate)
    }

    const clear = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    return{
        generate,
        passContext,
        draw,
        update,
        animate,
        moveToMouse,
        clear
    }
})()