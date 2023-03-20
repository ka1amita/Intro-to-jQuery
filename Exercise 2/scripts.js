let color = 'purple'
let number = 10
let word = 'cool'

if (color === 'purple') {
    $('.red').css('background-color', 'purple')
}

if (number > 100) {
    $('.yellow').text(`whoah, that's a big number.`)
} else {
    $('.yellow').text(`wjust a regular number, please.`)
}

if (word === 'cool') {
    $('.green').text(`Power of DOM`)
} else {
    $('.blue').text(`Power of DOM`)
}