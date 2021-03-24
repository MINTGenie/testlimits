control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    led.plot(0, 0)
    basic.pause(200)
})
function limits_alternate () {
    if (input.pinIsPressed(TouchPin.P0) && !(waspressed)) {
        waspressed = true
        longer = 10
    } else if (waspressed) {
        led.plot(0, 0)
        longer = 500
        waspressed = false
    } else {
        led.unplot(0, 0)
        longer = 100
    }
    basic.pause(longer)
}
let longer = 0
let waspressed = false
waspressed = false
longer = 100
pins.setEvents(DigitalPin.P0, PinEventType.Edge)
basic.forever(function () {
    led.unplot(0, 0)
})
