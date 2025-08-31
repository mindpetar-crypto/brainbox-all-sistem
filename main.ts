radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.play(muzika, music.PlaybackMode.LoopingInBackground)
    } else if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.stopAllSounds()
    }
})
let muzika = 0
muzika = music.stringPlayable("D B G F C5 D F D ", 300)
radio.setGroup(10)
music.setVolume(255)
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P2) < 10) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.play(muzika, music.PlaybackMode.LoopingInBackground)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 80) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        music.stopAllSounds()
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 130) {
        muzika = 0
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 160) {
        muzika = music.stringPlayable("C D E F F E D C ", 400)
    } else if (pins.analogReadPin(AnalogReadWritePin.P2) < 600) {
        muzika = music.stringPlayable("D B G F C5 D F D ", 400)
    }
})
