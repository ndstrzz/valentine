// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#C8A2C8', '#DDA0DD', '#E6CFE6', '#D8BFD8', '#E6E6FA', '#B284BE', '#967BB6'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the Cinnamoroll GIF initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var cinnamorollImage = new Image();
    cinnamorollImage.src = 'https://media.tenor.com/DhwscczZXo0AAAAi/cinnamoroll-cute.gif'; // Cinnamoroll GIF from Tenor
    cinnamorollImage.alt = 'Cinnamoroll';
    cinnamorollImage.onload = function() {
        imageContainer.appendChild(cinnamorollImage);
    };
}

// Function to display the Cinnamoroll heart GIF
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var cinnamorollHeartImage = new Image();
    cinnamorollHeartImage.src = 'https://media.tenor.com/DRN8u_PZ-OUAAAAi/cinnamoroll-love.gif'; // Cinnamoroll heart GIF (You can change this if needed)
    cinnamorollHeartImage.alt = 'Cinnamoroll Heart';
    cinnamorollHeartImage.onload = function() {
        imageContainer.appendChild(cinnamorollHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide options
    };
}

// Display the Cinnamoroll GIF initially
displayCat();

