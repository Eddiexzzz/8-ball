input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Choice = randint(1, 8)
    if (Choice == 1) {
        basic.showString("As I see it, yes.")
    } else if (Choice == 2) {
        basic.showString("Ask again later.")
    } else if (Choice == 3) {
        basic.showString("Better not tell you now.")
    } else if (Choice == 4) {
        basic.showString("Cannot predict now.")
    } else if (Choice == 5) {
        basic.showString("Concentrate and ask again.")
    } else if (Choice == 6) {
        basic.showString("Don't count on it.")
    } else if (Choice == 7) {
        basic.showString("It is certain.")
    } else {
        basic.showString("It is decidedly so.")
    }
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . #
        . # # # .
        # . . . #
        . # # # .
        `)
})
let Choice = 0
basic.showString("8 Ball")
Choice = 0
