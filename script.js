var today = moment();
var currentDay = $('#currentDay')
var textInput1 = document.getElementById(".text-input1")
var save1Btn = $('.saveBtn')
var localText1 = localStorage.getItem("storedText1")

// $('.text-input1').attr('placeholder', localText1);
$('.text-input1').attr('textContent', localText1);

console.log(textInput1)
$(currentDay).text(today.format("MMM Do, YYYY"));

save1Btn.on("click", function(){ 
    var savedText1 = $('.text-input1')
    localStorage.setItem("storedText1", savedText1.val());
   
});


// console.log($('.text-input1').text())