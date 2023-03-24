document.body.style.margin   = 0
document.body.style.overflow = `hidden`

function setup () {
   createCanvas (innerWidth, innerHeight)
   fill ('deeppink')
   rectMode (CENTER)
   noStroke ()
   noLoop ()
}

function  draw () {
   background (`green`)
   square (width / 2, height / 2, 100)
   circle (width / 1)
}
