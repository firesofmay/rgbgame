//init variables
var colors;
var colorAnswer;
var squares;
var colorDisplay;
var numberOfSquares;
var gameDiff = "hard";
const pageBackgroundColor = "#232323";

//library functions
function randomValue(){
    return Math.floor(Math.random() * 255);
}

function randomRGB(){
    return "rgb(" 
            + randomValue() 
            + ", "          
            + randomValue()
            + ", "
            + randomValue()
            + ")";
}

function squareClicked(){
    if (this.style.backgroundColor === colors[colorAnswer]){
        document.querySelector("#header span").textContent = "You Won!";
        resetSquareColors(colors[colorAnswer]);
        document.querySelector("h1").style.backgroundColor = colors[colorAnswer];
        document.querySelector("#resetBtn").textContent = "PLAY AGAIN?";
    }
    else{
        this.style.backgroundColor = pageBackgroundColor;
        document.querySelector("#header span").textContent = "Try Again!";
        
    }
    
}

function resetSquareColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function gameDifficulty(diff){
    switch (diff) {
        case "easy":
            colors = [randomRGB(),randomRGB(),randomRGB(), pageBackgroundColor, pageBackgroundColor, pageBackgroundColor];
            document.querySelector("#diffeasy").classList.add("btnActive");
            document.querySelector("#diffhard").classList.remove("btnActive");
            numberOfSquares = 3;
            break;

        case "hard":
        default:
            colors = [randomRGB(),randomRGB(),randomRGB(),randomRGB(),randomRGB(),randomRGB()];
            document.querySelector("#diffhard").classList.add("btnActive");
            document.querySelector("#diffeasy").classList.remove("btnActive");
            numberOfSquares = 6;    
            break;
    }
    resetSquareColors(pageBackgroundColor);
}

function resetGame(gameDiff){
    gameDifficulty(gameDiff);
    
    colorAnswer = Math.floor(Math.random() * (numberOfSquares - 1));
    colorDisplay = document.querySelector("#colorDisplay");
    
    colorDisplay.textContent = colors[colorAnswer];
    
    for(var i = 0; i < numberOfSquares; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", squareClicked);
    }

    document.querySelector("#header span").textContent = "Pick a Color!";
    document.querySelector("#resetBtn").textContent = "NEW COLORS";
    document.querySelector("h1").style.backgroundColor = "steelblue";
}

function init(){

    squares = document.querySelectorAll(".square");
    resetGame(gameDiff);
    
    for(var i = 0; i < colors.length; i++){
        squares[i].addEventListener("click", squareClicked);
    }

    document.querySelector("#resetBtn").addEventListener("click", function(){resetGame(gameDiff)});
    document.querySelector("#diffeasy").addEventListener("click", function(){resetGame("easy")});
    document.querySelector("#diffhard").addEventListener("click", function(){resetGame("hard")});
}

//init Page
init()