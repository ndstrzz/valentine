// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display Pak.gif
        });
    } else if (option === 'no') {
        // Array of messages for the "No" button
        var noMessages = [
            "dont you want more kekehh??",
            "you sure you dont want more blind box???",
            "dont wantt lippiesss??????",
            "please please just press YES IM BEGGING YOU"
        ];

        // Get the "No" button
        var noButton = document.getElementById('no-button');
        
        // Get the current text of the "No" button
        var currentText = noButton.innerText;

        // Find the next message in the array
        var nextIndex = noMessages.indexOf(currentText) + 1;
        
        // If we reached the last message, keep it the same
        if (nextIndex >= noMessages.length) {
            nextIndex = noMessages.length - 1;
        }

        // Update the "No" button text
        noButton.innerText = noMessages[nextIndex];

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increase font size by *1.5x
        yesButton.style.fontSize = newSize + 'px';
    } else {
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

// Function to display Pak.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = './Pak.gif?' + new Date().getTime(); // Cache busting to ensure fresh load
    catImage.alt = 'Pak';
    
    catImage.onload = function() {
        console.log('Pak.gif loaded successfully'); // Debugging log
        imageContainer.appendChild(catImage);
    };

    catImage.onerror = function() {
        console.error('Error loading Pak.gif - Check if the file exists in the correct directory!');
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = './cat-heart.gif?' + new Date().getTime(); // Cache busting
    catHeartImage.alt = 'Cat Heart';

    catHeartImage.onload = function() {
        console.log('cat-heart.gif loaded successfully'); // Debugging log
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide options
    };

    catHeartImage.onerror = function() {
        console.error('Error loading cat-heart.gif - Check if the file exists in the correct directory!');
    };
}

// Display Pak.gif initially
displayCat();
