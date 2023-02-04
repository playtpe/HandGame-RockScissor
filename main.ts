input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 4)
    if (hand == 1) {
        // Χαρτί
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        // Πέτρα
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 3) {
        // Ψαλίδι
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        // Μολύβι
        // 
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
// Δείξε το σκορ
// 
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Score")
    basic.showNumber(win)
    music.playMelody("E B C5 A B G A F ", 120)
})
// Κέρδισα !! Αύξησε το  σκορ
// 
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    win += 1
    basic.clearScreen()
})
// Καθάρισε την οθόνη - με το Β
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.playMelody("C5 B A G F E D C ", 120)
})
// Αρχικοποίηση
// 
let win = 0
let hand = 0
hand = 0
win = 0
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . # . . .
    `)
music.playMelody("E B C5 A B G A F ", 120)
basic.showString("Hi")
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Diamond)
    }
})
