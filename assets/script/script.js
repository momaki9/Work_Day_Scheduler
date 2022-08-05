// variable dateEl selects the element by ID
var dateEl = $('#currentDay');

//this function uses moment to load the current date
function dateToday() {
  var currentTime = moment().format('dddd MMMM Do, YYYY');
  dateEl.text(currentTime);
}
// selects the element by class
var timeBlocks = $('.time-block');
// this creates a div element with class of row and appends it to the timeblock element
var divRow = $('<div>')
divRow.addClass('row')
timeBlocks.append(divRow)

// selects elements by class
var allRows = $('.row')
var saveBtn = $('.saveBtn')

//setting a variable to correlate the current hour
var today = new Date();
var hour = today.getHours();

// this function outputs each time block and dynamically saves the content to local storage
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
    timeSlot.addClass('hour col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1')
    timeSlot.text(hours)
    allRows.append(timeSlot)

    var textInput = $('<textarea>')
    textInput.addClass('textarea col-xl-10 col-lg-10 col-md-10  col-sm-10 col-10')
    allRows.append(textInput)
    var saveBtn = $('<button>')
    saveBtn.text("Save")
    saveBtn.addClass('saveBtn col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1')
    allRows.append(saveBtn) 

    if (workHours[i] == hour) {
      textInput.addClass("present")
    } else if (workHours[i] > hour) {
      textInput.addClass("future")
    } else if (workHours[i] < hour) {
      textInput.addClass("past")
    }
  }
  // 8 am time-block
  $('.row').children().eq(1).addClass("ei-am-input")
  $('.row').children().eq(2).addClass("ei-am-btn")
  var eightAmBtn = $('.ei-am-btn')
  var eightAmInput = $('.ei-am-input')
  eightAmBtn.on('click', function () {
  var eightText = eightAmInput.val()
  localStorage.setItem("8AM", eightText)
  })
  // 9 am time-block
  $('.row').children().eq(4).addClass("n-am-input")
  $('.row').children().eq(5).addClass("n-am-btn")
  var nineAmBtn = $('.n-am-btn')
  var nineAmInput = $('.n-am-input')
  nineAmBtn.on('click', function () {
  var nineText = nineAmInput.val()
  localStorage.setItem("9AM", nineText)
  })
  // 10 am time-block
  $('.row').children().eq(7).addClass("t-am-input")
  $('.row').children().eq(8).addClass("t-am-btn")
  var tenAmBtn = $('.t-am-btn')
  var tenAmInput = $('.t-am-input')
  tenAmBtn.on('click', function () {
  var tenText = tenAmInput.val()
  localStorage.setItem("10AM", tenText)
  })
  // 11 am time-block
  $('.row').children().eq(10).addClass("el-am-input")
  $('.row').children().eq(11).addClass("el-am-btn")
  var elevenAmBtn = $('.el-am-btn')
  var elevenAmInput = $('.el-am-input')
  elevenAmBtn.on('click', function () {
  var elevenText = elevenAmInput.val()
  localStorage.setItem("11AM", elevenText)
  })
  // 12 pm time-block
  $('.row').children().eq(13).addClass("tw-pm-input")
  $('.row').children().eq(14).addClass("tw-pm-btn")
  var twelvePmBtn = $('.tw-pm-btn')
  var twelvePmInput = $('.tw-pm-input')
  twelvePmBtn.on('click', function () {
  var twelveText = twelvePmInput.val()
  localStorage.setItem("12PM", twelveText)
  })
  // 1 pm time-block
  $('.row').children().eq(16).addClass("o-pm-input")
  $('.row').children().eq(17).addClass("o-pm-btn")
  var onePmBtn = $('.o-pm-btn')
  var onePmInput = $('.o-pm-input')
  onePmBtn.on('click', function () {
  var oneText = onePmInput.val()
  localStorage.setItem("1PM", oneText)
  })
  // 2 pm time-block
  $('.row').children().eq(19).addClass("two-pm-input")
  $('.row').children().eq(20).addClass("two-pm-btn")
  var twoPmBtn = $('.two-pm-btn')
  var twoPmInput = $('.two-pm-input')
  twoPmBtn.on('click', function () {
  var twoText = twoPmInput.val()
  localStorage.setItem("2PM", twoText)
  })
  // 3 pm time-block
  $('.row').children().eq(22).addClass("th-pm-input")
  $('.row').children().eq(23).addClass("th-pm-btn")
  var threePmBtn = $('.th-pm-btn')
  var threePmInput = $('.th-pm-input')
  threePmBtn.on('click', function () {
  var threeText = threePmInput.val()
  localStorage.setItem("3PM", threeText)
  })
  // 4 pm time-block
  $('.row').children().eq(25).addClass("fo-pm-input")
  $('.row').children().eq(26).addClass("fo-pm-btn")
  var fourPmBtn = $('.fo-pm-btn')
  var fourPmInput = $('.fo-pm-input')
  fourPmBtn.on('click', function () {
  var fourText = fourPmInput.val()
  localStorage.setItem("4PM", fourText)
  })
  // 5 pm time-block
  $('.row').children().eq(28).addClass("fi-pm-input")
  $('.row').children().eq(29).addClass("fi-pm-btn")
  var fivePmBtn = $('.fi-pm-btn')
  var fivePmInput = $('.fi-pm-input')
  fivePmBtn.on('click', function () {
  var fiveText = fivePmInput.val()
  localStorage.setItem("5PM", fiveText)
  })

  // sub function to save text area content to local storage
  function saveInfo() {
    // 8 AM task
    var savedEi = localStorage.getItem("8AM")
    eightAmInput.val(savedEi)
    // 9 AM task
    var savedN = localStorage.getItem("9AM")
    nineAmInput.val(savedN)
    // 10 AM task
    var savedT = localStorage.getItem("10AM")
    tenAmInput.val(savedT)
    // 11 AM task
    var savedEl = localStorage.getItem("11AM")
    elevenAmInput.val(savedEl)
    // 12 PM task
    var savedTw = localStorage.getItem("12PM")
    twelvePmInput.val(savedTw)
    // 1 PM task
    var savedO = localStorage.getItem("1PM")
    onePmInput.val(savedO)
    // 2 PM task
    var savedTwo = localStorage.getItem("2PM")
    twoPmInput.val(savedTwo)
    // 3 PM task
    var savedThree = localStorage.getItem("3PM")
    threePmInput.val(savedThree)
    // 4 PM task
    var savedFo = localStorage.getItem("4PM")
    fourPmInput.val(savedFo)
    // 5 PM task
    var savedFi = localStorage.getItem("5PM")
    fivePmInput.val(savedFi)
  }
  saveInfo();
}
// calling both functions when the user loads the page
dateToday();
scheduler();