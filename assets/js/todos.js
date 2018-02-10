/* global $ */
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed')
})

$('ul').on('click', 'span', function (event) {
  $(this).parent().fadeOut(600, function () {
    $(this).remove()
  })
  event.stopPropagation()
})

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var inputValue = $(this).val()
    $(this).val('')
    $('ul').append(`<li><span><i class="fas fa-trash-alt"></i></span>${inputValue}</li>`)
  }
})

$('.fa-plus').click(function () {
  $("input[type='text']").fadeToggle()
})
