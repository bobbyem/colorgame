var colors = generateRandomColors(6);
var square = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * square.length)];
var randomNumber = Math.floor(Math.random() * 6);
var pickedColorDisplay = document.querySelector(".pickedColorDisplay");
var header = document.querySelector(".header");
var feedback = document.getElementById("feedback-Display");

for (var i = 0; i < square.length; i ++) {
    square[i].style.backgroundColor= colors[i];
    // add initial colors to squares
    square[i].addEventListener("click", function(){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            // alert("win");
            header.style.backgroundColor = pickedColor;
            feedback.textContent = ("Correct!");
            changeColors();
            reloadPage();
        }
        else {
            feedback.textContent = ("Wrong!");
            this.style.backgroundColor = "#232323";
        }
    })
};

function changeColors(color) {
    // Loop thru all squares
    // Change each color to match Picked Color
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor=== pickedColor;
    }
};

function reloadPage () {
    // debugger
    // window.setTimeout(window.alert, 2*5000, "that was slow");
    setTimeout(function() {location.reload(true);},  5000);
};

function generateRandomColors (num) {
    // make array
    var arr = [];
    // add num random colors
    for (var  i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor())
    }
    // return array
    return arr;

};
function randomColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

pickedColorDisplay.innerHTML = pickedColor;

