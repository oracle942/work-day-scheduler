var today = moment();
var currentDay = $('#currentDay')
var text = localStorage.getItem("text")

$(currentDay).text(today.format("MMM Do, YYYY"));




