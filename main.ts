input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
basic.forever(function () {
	
})
