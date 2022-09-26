input.onGesture(Gesture.Shake, function () {
    if (number == 1) {
        music.playMelody("C5 B A G A B C5 C5 ", 120)
        basic.showString("YES")
        basic.showIcon(IconNames.Happy)
    } else if (number == 2) {
        music.playMelody("E D C C C D D C ", 120)
        basic.showString("NO")
        basic.showIcon(IconNames.Sad)
    } else {
        music.playMelody("C5 E A D B C A C ", 120)
        basic.showString("MAYBE")
        basic.showIcon(IconNames.Asleep)
    }
})
let number = 0
basic.showString("Ask a question")
number = randint(0, 2)
