// Eray Genç
// 19050111005
// Activity 6

// declaring level and timeout
let level = 1;
let inlevelclick = 0; // following how many times clicked in a level
let timeout = 500;  

// getting the button as const  
const button = document.getElementById("button");

// adding event listener to button when it's clicked
button.addEventListener("click", function() {
    // if player click to button three times, increase the level and make game harder by decreasing clicksRemaining
    inlevelclick++;
    if (inlevelclick == 3) {
        level++;
        if (timeout >= 100) { // will be 0 at 6th level
            timeout -= 100; //make harder to win by decreasing clicksRemaining
        }
        window.alert(`You are the winner! You can go to next level ${level}`);
        inlevelclick = 0;
    }
    
});

// adding event listener to button when the mouse enters it
button.addEventListener("mouseenter", function() {
    setTimeout(moveButton, timeout);
});

// moving button 
function moveButton() {
    button.style.marginTop = Math.random() * 500 + "px";  // giving margin from top with the value we got randomly
    button.style.marginLeft = Math.random() * 500 + "px";  // giving margin from left with the value we got randomly
}

