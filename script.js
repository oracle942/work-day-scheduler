  
var today = moment();
var currentDay = $('#currentDay')
$(currentDay).text(today.format("MMM Do, YYYY"));


var saveBtn = $('.saveBtn')
var localText = localStorage.getItem("storedText")

$('.text-input').attr('placeholder', localText);
// This is meant to add the local storage item via textContent.
// This is the intended method, but error occurs for unknown reasons.
// If functional, this line of code would repeat
// $('.text-input1').attr('textContent', localText1);

saveBtn.on("click", function(){ 
    var savedText = $('.text-input')
    localStorage.setItem("storedText", savedText.val());
    
});






var saveBtn2 = $('.saveBtn2')
var localText2 = localStorage.getItem("storedText2")

$('.text-input2').attr('placeholder', localText2);
saveBtn2.on("click", function(){ 
    var savedText2 = $('.text-input2')
    localStorage.setItem("storedText2", savedText2.val());
   
});

