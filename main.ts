basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    rekabit.setServoPosition(ServoChannel.S1, Math.map(input.lightLevel(), 0, 255, 20, 160))
})
