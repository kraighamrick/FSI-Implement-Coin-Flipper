// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
 // TODO: Add event listener and handler for flip and clear buttons
    let flipButton = document.querySelector('#flip-button')
    flipButton.addEventListener('click', () => {
        let num = Math.random();
        if (num < 0.5) {    
            console.log('heads')
    
        } else {
            console.log('tails')
        }

}
);

    let clearButton = document.querySelector('#clear-button')
    clearButton.addEventListener('click', () => {
        alert('you clicked clear');
}
);

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})