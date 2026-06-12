// ================================
// Dark / Light Mode
// ================================

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


// ================================
// Background Color Changer
// ================================

let colors = [
    "#ff9a9e",
    "#a18cd1",
    "#84fab0",
    "#f6d365",
    "#5ee7df",
    "#43e97b"
];

function changeBackground() {

    let random =
    colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = random;
}


// ================================
// Text Color Changer
// ================================

function changeTextColor(){

    let textColors = [
        "red",
        "blue",
        "green",
        "purple",
        "orange",
        "white"
    ];


    let random =
    textColors[Math.floor(Math.random() * textColors.length)];


    document.getElementById("message").style.color = random;
}



// ================================
// Reset Style
// ================================

function resetStyle(){

    document.body.classList.remove("dark");

    document.body.style.background =
    "linear-gradient(135deg, #667eea, #764ba2)";


    document.getElementById("message").style.color = "black";

    document.body.style.fontSize = "16px";

}



// ================================
// Change Heading
// ================================

let headings = [
    "🚀 JavaScript Power",
    "🔥 DOM Manipulation Master",
    "💻 Frontend Developer Mode",
    "✨ Interactive Dashboard",
    "🎯 Keep Learning JavaScript"
];


function changeHeading(){

    let random =
    headings[Math.floor(Math.random() * headings.length)];


    document.getElementById("heading").innerHTML =
    random;
}



// ================================
// Motivational Quotes
// ================================

let quotes = [

"Success starts with small efforts repeated every day.",

"Code. Learn. Improve. Repeat.",

"Every expert was once a beginner.",

"Practice makes a frontend developer better."

];


function showQuote(){

    let random =
    quotes[Math.floor(Math.random() * quotes.length)];


    document.getElementById("message").innerHTML =
    random;
}



// ================================
// Current Date & Time
// ================================

function showTime(){

    let time = new Date();


    document.getElementById("message").innerHTML =
    time.toLocaleString();
}



// ================================
// Change Emoji Mood
// ================================

let moods = [
    "😊 Happy",
    "😎 Cool",
    "🔥 Motivated",
    "🚀 Productive",
    "💻 Coding Mode"
];


function changeEmoji(){

    let random =
    moods[Math.floor(Math.random() * moods.length)];


    document.getElementById("message").innerHTML =
    random;
}



// ================================
// Font Size Controls
// ================================

let size = 16;


function increaseFont(){

    size += 2;

    document.body.style.fontSize =
    size + "px";
}



function decreaseFont(){

    if(size > 10){

        size -= 2;

        document.body.style.fontSize =
        size + "px";
    }
}



// ================================
// Random Number Generator
// ================================

function generateNumber(){

    let number =
    Math.floor(Math.random() * 1000);


    document.getElementById("number").innerHTML =
    number;
}



// ================================
// Counter
// ================================

let count = 0;


function increaseCounter(){

    count++;

    document.getElementById("counter").innerHTML =
    count;
}


function decreaseCounter(){

    count--;

    document.getElementById("counter").innerHTML =
    count;
}


function resetCounter(){

    count = 0;

    document.getElementById("counter").innerHTML =
    count;
}



// ================================
// Image Gallery Slider
// ================================

let images = [

"https://picsum.photos/id/1015/700/400",

"https://picsum.photos/id/1016/700/400",

"https://picsum.photos/id/1025/700/400",

"https://picsum.photos/id/1043/700/400"

];


let index = 0;


function nextImage(){

    index++;

    if(index >= images.length){

        index = 0;
    }


    document.getElementById("image").src =
    images[index];
}



function previousImage(){

    index--;


    if(index < 0){

        index = images.length - 1;
    }


    document.getElementById("image").src =
    images[index];
}



// ================================
// Image Zoom
// ================================

let zoom = 1;


function zoomIn(){

    zoom += 0.1;


    document.getElementById("image").style.transform =
    `scale(${zoom})`;
}



function zoomOut(){

    if(zoom > 0.6){

        zoom -= 0.1;


        document.getElementById("image").style.transform =
        `scale(${zoom})`;
    }
}



// ================================
// Welcome Alert
// ================================

function welcomeMessage(){

    alert(
        "🎉 Welcome to my Advanced Interactive JavaScript Dashboard!"
    );
}



// ================================
// Button Sound Effect
// ================================

function playSound(){

    let sound =
    new Audio(
    "https://www.soundjay.com/buttons/sounds/button-3.mp3"
    );


    sound.play();
}



// ================================
// Page Load Message
// ================================

window.onload = function(){

    alert(
    "👋 Welcome! Explore all the interactive JavaScript features."
    );

}