$(document).ready(function () {

  $('.saveBtn').on('click', function () {
    var textVal = $(this).siblings('.description').val()
    var hourId = $(this).parent().attr('id')
    localStorage.setItem(hourId, textVal)
  })
  localStorageReader()
  timeColor()

});

function localStorageReader() {
  var timeBlocks = $('.container-lg').children()
  var startingHour = timeBlocks.attr('id').split(`-`)[1]
  var hourNumber = parseInt(startingHour)
  for (var i = 0; i < 9; i++) {
    var currentHour = hourNumber + i
    var selectString = `#hour-${currentHour.toString()} .description`
    var storageValue = localStorage.getItem(`hour-${currentHour.toString()}`)
    $(selectString).val(storageValue)

  }
}

function timeColor() {
  var timeBlocks = $('.container-lg').children()
  var startingHour = timeBlocks.attr('id').split(`-`)[1]
  var hourNumber = parseInt(startingHour)
  var timeOfDay = dayjs().hour()
  
  for (var i = 0; i < 9; i++) {
    var schudulerHour = hourNumber + i
    var selectString = `#hour-${schudulerHour.toString()}`
    if (schudulerHour < timeOfDay) {
      $(selectString).addClass(`past`)
    }
  }

}