// generation of random value
playername = localStorage.getItem('player_name');
var y = Math.floor(Math.random() * 10 + 1);
// count of attempts
guess = 1
function submit() {
    var x = document.getElementById("guessField").value; 
    if(x == y)
 {
    alert("CONGRATULATIONS "+playername+"!!! YOU GUESSED IT RIGHT IN "+guess+" GUESSES!!")
 } 
 else if(x > y)
 {
    guess++;
    alert("Oops! Try a smaller number");
 }
 else
 {
    guess++;
    alert("Oops! Try a bigger number");
 }
// function for the number sent by the user
}
// until hit
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}