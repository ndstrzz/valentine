// Global counter to track the "No" button presses
let noClickCount = 0;

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display Pak.gif
            displayLoveMessage(); // Show the cute message!
        });
    } else if (option === 'no') {
        // Array of messages for the "No" button
        var noMessages = [
            "dont you want more kekehh??",
            "you sure you dont want more blind box???",
            "dont wantt lippiesss??????",
            "please please just press YES IM BEGGING YOU",
            "do you not love lilacc :( ",
            "do you not love daisyy :(  ",
            "do you not love fluffy :( ",
            "do you not love rockyy :(  ",
            "do you not love me at allllll :(  ",
            "hmphh",
            "hmphhh",
            "ihhh stop testingggggg meeee",
            "DONTT TEST MEEE, ILL MAKE SURE TO PUNISH IF YOU CONTINUE",
            "JUST SAY YESS",
            "SAYYY YESSSSSSSSSS",
            "MAMIIIII"
        ];

        // Get the "No" button
        var noButton = document.getElementById('no-button');

        // Ensure the text continues changing until "MAMIIIII"
        if (noClickCount < noMessages.length) {
            noButton.innerText = noMessages[noClickCount]; // Update text
            noClickCount++; // Increase counter
        }

        // Move the "No" button to a random position
        moveNoButtonRandomly();

        // Make the "Yes" button wiggle non-stop
        var yesButton = document.getElementById('yes-button');
        yesButton.classList.add('wiggle'); // Add the wiggle effect

        // Make the "Yes" button grow **FASTER**
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; // Increased from 1.2x to **1.5x**
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to display the love message when "Yes" is pressed
function displayLoveMessage() {
    var messageContainer = document.createElement("div");
    messageContainer.id = "love-message";
    messageContainer.innerHTML = `
        <p id="love-text">Hehehe I know no matter how stubborn my little baby is, 
        she will still press YES at the end of the dayyy. 
        MWAHH MWAHHH I LOVE YOU SOOOOOO MUCHHHHHHHHHHH. <br><br> 
        Stay tuned for 14 February okiiii!!!!! 💖💖💖</p>
    `;
    document.getElementById("container").appendChild(messageContainer);
}

// Function to randomly move the "No" button
function moveNoButtonRandomly() {
    var noButton = document.getElementById('no-button');
    var maxWidth = window.innerWidth - noButton.offsetWidth;
    var maxHeight = window.innerHeight - noButton.offsetHeight;

    var randomX = Math.floor(Math.random() * maxWidth);
    var randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
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
        console.error('Error loading cat-heart.gif - Check if the file exists in the correct directory!");
    };
}

// Display Pak.gif initially
displayCat();
