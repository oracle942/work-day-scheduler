var today = moment();
var currentDay = $('#currentDay')
var textInput1 = $('.text-input1').text()
var save1Btn = $('.saveBtn')
var localText1 = localStorage.getItem("storedText1")
var storedText1

textInput1 = localText1

$(currentDay).text(today.format("MMM Do, YYYY"));

save1Btn.on("click", function(){ 
    var storedText1 = $('.text-input1').text()
    localStorage.setItem("storedText1", storedText1);
    console.log(storedText1)
});


console.log($('.text-input1').text())