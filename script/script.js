var today = new Date();
var hour = today.getHours();

var el = document.getElementById('currentDay');
el.innerHTML = today.toDateString();

var timeBlocks = $('.time-block');

var divRow = $('<div>')
divRow.addClass('row')
timeBlocks.append(divRow)

var allRows = $('.row')
var saveBtn = $('.saveBtn')

function scheduler() {
    var workHours = [
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
    ];
  
    for (var i = 0; i < workHours.length; i++) { 
    var suffix = workHours[i] >= 12 ? "PM" : "AM";
    var hours = ((workHours[i] - 1) % 12 + 1) + " " + suffix 

    var timeSlot = $('<h3>')
    timeSlot.addClass('hour col-xl-1 col-md-1 col-1')
    timeSlot.text(hours)
    allRows.append(timeSlot)

    var textInput = $('<textarea>')
    textInput.addClass('textarea col-xl-10 col-md-10 col-10')
    allRows.append(textInput)
    

    var saveBtn = $('<button>')
    saveBtn.addClass('saveBtn col-xl-1 col-md-1 col-1')
    allRows.append(saveBtn)  
    saveBtn.on('click', function(event) {
      // alert("hi")
      event.preventDefault();
      localStorage.setItem("Input", JSON.stringify(textInput.text()));
    })
    
    
    if (workHours[i] == hour) {
      textInput.addClass("present")
    } else if (workHours[i] > hour) {
      textInput.addClass("future")
    } else if (workHours[i] < hour) {
      textInput.addClass("past")
    }
  }
  JSON.parse(localStorage.getItem("Input"))
}


scheduler();