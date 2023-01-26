// Don't forget to comment your code as you work!
function run () {
    if (true) {
        controller.moveSprite(mySprite)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump = 15
})
let mySprite: Sprite = null
let jump: number
mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    f f 4 d 4 d d d d f . . 
    . f f f 4 d d b b f . . 
    . 4 d d e 4 4 4 e f . . 
    . e d d e 1 1 1 1 f . . 
    . f e e f 6 6 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
