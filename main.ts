input.onPinPressed(TouchPin.P0, function () {
    turtle.home()
})
input.onButtonPressed(Button.A, function () {
    if (START == 1) {
        turtle.turnLeft()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    if (Pen == 0) {
        turtle.pen(TurtlePenMode.Down)
        Pen = 1
    } else {
        turtle.pen(TurtlePenMode.Up)
        Pen = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (START == 1) {
        turtle.forward(1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (START == 1) {
        turtle.turnRight()
    }
})
let Pen = 0
let START = 0
START = 0
START = 1
