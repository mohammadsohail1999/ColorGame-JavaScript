//nb=
var numSquare = 6;
var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebtn = document.querySelectorAll('.mode');

init();

function init(){

    modeButton();
    setSquare();
    reset();
 

}



function modeButton(){


  
for(var i = 0; i < modebtn.length; i++){

    //mode btn event listeners...
    
      modebtn[i].addEventListener('click', function(){
    
        modebtn[0].classList.remove('selected');
        modebtn[1].classList.remove('selected');
         this.classList.add('selected');
        
        this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6;
         
         reset();
       
    
      });
    
        
    
    }




}

function setSquare(){

   
for(var i = 0; i < squares.length; i++){
  
    //add event listeners 
    squares[i].addEventListener("click", function(){
             
        //grab color of clicked square
    var clickedColor= this.style.background;                                   

        //compare color to pickedcolor
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct! 😃" 
          changeColor(clickedColor);
        h1.style.background = clickedColor;
        resetbutton.textContent = 'Play Again!';
    }
    else{
          this.style.background = "#232323";
          
          messageDisplay.textContent = " Try Again! 😅";
    }

     

    });  

    


}



}


function reset(){

 //generate all new colors
 colors = generateRandomColors(numSquare);

 //pick a new random color
pickedColor = pickColor();

 resetbutton.textContent = 'new colors';
//change colors of squares
 colorDisplay.textContent = pickedColor;

//change color of squares

for( var i= 0; i< squares.length; i++){


    if(colors[i]){
        squares[i].style.display = 'block';
    squares[i].style.background = colors[i];
    //squares[i].style.display = 'block';
    }
    else{
        squares[i].style.display = 'none';
    }


}


// changing heading color
h1.style.background = 'steelblue';
 
messageDisplay.textContent = "";









}

















resetbutton.addEventListener('click', function (){
 
    reset();

});








function changeColor(color){

 for(var i = 0; i < squares.length; i++){


     squares[i].style.background = color;
 

 } 


}



function pickColor(){

 var random = Math.floor(Math.random() * colors.length); 
 return colors[random];


}


function generateRandomColors(num){

 //make an array
 var arr = [];
 //add num random colors to array
 for(var i = 0; i < num; i++){
     

    for(var i = 0; i < num; i++){
      //get random color and push into arr
       
      arr.push(randomColor());
        
           
       }

     //return that array
     return arr;



 }


}

function randomColor(){
    //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);

   //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
    
  //pick a "blue" from 0 - 255
   var b = Math.floor(Math.random() * 256);

   return `rgb(${r}, ${g}, ${b})`;

      

}
