// Global Variable Declarations
var today = moment();
var currentDay = $('#currentDay')
var object = document.querySelectorAll('textarea')
var array = Array.from(object)

// Set current day on Jumbotron
$(currentDay).text(today.format("MMM Do, YYYY"));

// Begin Interval to check for time and set styling accordingly
var interval = setInterval(timeCheck(), 1000)
console.log(interval)

// Button Declarations
var saveBtn = $('.saveBtn')
var saveBtn2 = $('.saveBtn2')
var saveBtn3 = $('.saveBtn3')
var saveBtn4 = $('.saveBtn4')
var saveBtn5 = $('.saveBtn5')
var saveBtn6 = $('.saveBtn6')
var saveBtn7 = $('.saveBtn7')
var saveBtn8 = $('.saveBtn8')
var saveBtn9 = $('.saveBtn9')

// Set local storage 
var localText = localStorage.getItem("storedText")
var localText2 = localStorage.getItem("storedText2")
var localText3 = localStorage.getItem("storedText3")
var localText4 = localStorage.getItem("storedText4")
var localText5 = localStorage.getItem("storedText5")
var localText6 = localStorage.getItem("storedText6")
var localText7 = localStorage.getItem("storedText7")
var localText8 = localStorage.getItem("storedText8")
var localText9 = localStorage.getItem("storedText9")


// Saves each entry as a placeholder for display on page refresh
$('.text-input').attr('placeholder', localText);
// This is meant to add the local storage item via textContent.
// This is the intended method, but error occurs for unknown reasons.
// If functional, the following line of code would repeat
$('.text-input').attr('textContent', localText);
$('.text-input2').attr('placeholder', localText2);
$('.text-input3').attr('placeholder', localText3);
$('.text-input4').attr('placeholder', localText4);
$('.text-input5').attr('placeholder', localText5);
$('.text-input6').attr('placeholder', localText6);
$('.text-input7').attr('placeholder', localText7);
$('.text-input8').attr('placeholder', localText8);
$('.text-input9').attr('placeholder', localText9);



// Save button functionality
saveBtn.on("click", function(){ 
    var savedText = $('.text-input')
    localStorage.setItem("storedText", savedText.val());
    
});

$('.text-input2').attr('placeholder', localText2);
saveBtn2.on("click", function(){ 
    var savedText2 = $('.text-input2')
    localStorage.setItem("storedText2", savedText2.val());
   
});
$('.text-input3').attr('placeholder', localText3);
saveBtn3.on("click", function(){ 
    var savedText3 = $('.text-input3')
    localStorage.setItem("storedText3", savedText3.val());
   
});
$('.text-input4').attr('placeholder', localText4);
saveBtn4.on("click", function(){ 
    var savedText4 = $('.text-input4')
    localStorage.setItem("storedText4", savedText4.val());
   
});

$('.text-input5').attr('placeholder', localText5);
saveBtn5.on("click", function(){ 
    var savedText5 = $('.text-input5')
    localStorage.setItem("storedText5", savedText5.val());
   
});
$('.text-input6').attr('placeholder', localText6);
saveBtn6.on("click", function(){ 
    var savedText6 = $('.text-input6')
    localStorage.setItem("storedText6", savedText6.val());
   
});
$('.text-input7').attr('placeholder', localText7);
saveBtn7.on("click", function(){ 
    var savedText7 = $('.text-input7')
    localStorage.setItem("storedText7", savedText7.val());
   
});
$('.text-input8').attr('placeholder', localText8);
saveBtn8.on("click", function(){ 
    var savedText8 = $('.text-input8')
    localStorage.setItem("storedText8", savedText8.val());
   
});
$('.text-input9').attr('placeholder', localText9);
saveBtn9.on("click", function(){ 
    var savedText9 = $('.text-input9')
    localStorage.setItem("storedText9", savedText9.val());
   
});


// This function runs in the interval initialized above and assigns styling to each row according to the current time

function timeCheck () {
  
    for(var i = 0; i < array.length; i++){  
            console.log(array[i]['id'])
        console.log(today.format("H"))
            if(parseInt(array[i]['id']) === parseInt(today.format("H"))){
            array[i].classList.add('present')}



           else if(parseInt(array[i]['id']) < parseInt(today.format("H"))){
            array[i].classList.add('past')}

            else if(parseInt(array[i]['id'])  > parseInt(today.format("H"))){
                array[i].classList.add('future')}
    
    }
       

}
// i = 0
// console.log(today.format("H"))
// // console.log(array[i]['id'])
// var i = 0
// console.log(array[i].classList)
