$('#btn1').hide()
$('.map').hide()

$('#btn1').on('click', (event) => {
    $('.map').fadeOut()
})
$('#btn2').on('click', (event) => {
    $('.map').fadeIn()
})

$('#btn1').on('click', (event) => {
    $('#btn1').hide()
    $('#btn2').show()
})


$('#btn2').on('click', (event) => {
    $('#btn1').show()
    $('#btn2').hide()
})


