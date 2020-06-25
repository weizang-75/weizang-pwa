import { gsap } from 'gsap'

let duration = 1

const fadeToWhite = (div, callback) => {
     gsap.to(div, {
        duration: 0.6 * duration,
        rotationX: -180,
        opacity: 0,
        scale: 0.75,
        onComplete: callback,
    });
}

const flipOut = (div, callback) => {
     gsap.to(div, {
        duration: 0.75 * duration,
        rotationY: -180,
        opacity: 0,
        onComplete: callback,
    });
}

export const animateLogo = (animation, div, callback) => {
    
    switch (animation) {
        
        case `fadeToWhite`:
            return fadeToWhite(div, callback)

        case `flipOut`:
            return flipOut(div, callback)

        default: {
            return null
        }
    }
}
