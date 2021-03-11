let yon = 0
basic.forever(function () {
    yon = input.compassHeading()
    if (yon < 45 || yon > 315) {
        basic.showString("N")
    } else {
        basic.showString(" ")
    }
})
