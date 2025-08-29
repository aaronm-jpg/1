let Sprite: game.LedSprite = null
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A B A G A C ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    Sprite = game.createSprite(8, 1)
})
