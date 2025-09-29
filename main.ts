input.onButtonPressed(Button.A, function () {
    if (sprite.isTouching(lik_2)) {
        game.addScore(1)
        lik_2.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (game.score()))
})
let lik_2: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P2) < 10) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 80) {
        lik_2 = game.createSprite(randint(0, 4), randint(0, 4))
        basic.pause(500)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 130) {
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 160) {
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 600) {
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
})
