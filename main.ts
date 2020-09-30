let ＧＰＡ = 0
input.onGesture(Gesture.Shake, function () {
    ＧＰＡ = randint(80, 100)
    basic.showNumber(ＧＰＡ)
    if (ＧＰＡ < 80) {
        basic.showString("B+")
    } else if (ＧＰＡ < 85) {
        basic.showString("A-")
    } else if (ＧＰＡ < 90) {
        basic.showString("A")
    } else if (ＧＰＡ <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
