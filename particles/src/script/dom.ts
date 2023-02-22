// iife
export default (function(){
    let canvas: HTMLCanvasElement

    const _stretchCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    // get canvas
    const setup = (selector: string): CanvasRenderingContext2D | null => {
        const element = document.querySelector(selector)

        if(!element){
            throw new Error("No element found with selector: " + selector)
        }
        canvas = element as HTMLCanvasElement
        _stretchCanvas()

        window.addEventListener('resize', _stretchCanvas)

        return canvas.getContext('2d')
    }
    return{
        setup
    }
})()

//TODO: get canvas
//TODO: stretch canvas (to window size)
//TODO: get context