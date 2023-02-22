import { Colors } from '../interfaces/Colors';

export class Particle {
    x: number
    y: number
    dx: number
    dy: number
    size: number
    color: Colors

    constructor(
        x: number,
        y: number,
        dx?: number,
        dy?: number,
        size?: number,
        color?: Colors,
    ){
        // x and y are required -> no acces to context here
        this.x = x
        this.y = y
        this.dx = dx ? dx : Math.random() * 4 - 2
        this.dy = dy ? dy : Math.random() * 4 - 2
        this.size = size ? size : Math.random() * 10 + 1
        this.color = color ? color : Object.values(Colors)[Math.round(Math.random() * Object.values(Colors).length)] //TODO: randomize color
    }
}