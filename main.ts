namespace SpriteKind {
    export const Hat = SpriteKind.create()
    export const hattie = SpriteKind.create()
    export const mike = SpriteKind.create()
    export const dexter = SpriteKind.create()
    export const sonia = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.sonia, SpriteKind.hattie, function (sprite, otherSprite) {
    sprite.say("'Scuse me!", 500)
})
sprites.onOverlap(SpriteKind.dexter, SpriteKind.sonia, function (sprite, otherSprite) {
    sprite.say("Woops!", 500)
})
sprites.onOverlap(SpriteKind.dexter, SpriteKind.mike, function (sprite, otherSprite) {
    sprite.setVelocity(randint(15, 145), randint(15, 145))
    otherSprite.setVelocity(randint(15, 145), randint(15, 145))
    sprite.say("Watch out!", 500)
    otherSprite.say("Waugh!", 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    soniaSprite.setPosition(randint(15, 145), randint(15, 105))
    mikeSprite.setPosition(randint(15, 145), randint(15, 105))
    hattieSprite.setPosition(randint(15, 145), randint(15, 105))
    dexterSprite.setPosition(randint(15, 145), randint(15, 105))
})
sprites.onOverlap(SpriteKind.sonia, SpriteKind.mike, function (sprite, otherSprite) {
    sprite.setVelocity(randint(15, 145), randint(15, 145))
    otherSprite.setVelocity(randint(15, 145), randint(15, 145))
    sprite.say("Watch your step!", 500)
    otherSprite.say("Oomf!", 500)
})
sprites.onOverlap(SpriteKind.hattie, SpriteKind.mike, function (sprite, otherSprite) {
    sprite.say("Sorry about that!", 500)
})
let mikeSprite: Sprite = null
let dexterSprite: Sprite = null
let soniaSprite: Sprite = null
let hattieSprite: Sprite = null
hattieSprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.hattie)
soniaSprite = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.sonia)
dexterSprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.dexter)
mikeSprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.mike)
soniaSprite.setPosition(randint(15, 145), randint(15, 105))
mikeSprite.setPosition(randint(15, 145), randint(15, 105))
dexterSprite.setPosition(randint(15, 145), randint(15, 105))
hattieSprite.setPosition(randint(15, 145), randint(15, 105))
