/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maxim Malik
 * Created on: Deec 2025
 * This program says to a microbit if its too close to an object if it is less than 10 cm.
*/

// variable
let distanceToAnObject: number = 0

// setup
radio.setGroup(69)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    // gets the distance from the sonar
    distanceToAnObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showIcon(IconNames.Happy)

    if (distanceToAnObject < 10) {
        radio.sendString("Too Close")
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
}

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})