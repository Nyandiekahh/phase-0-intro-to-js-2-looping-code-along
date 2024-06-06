// Declaring an array of names and an event
const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise';

// Function to generate thank you messages for each name in the array
function writeCards(names, event) {
    // Initialize an empty array to store the thank you messages
    let thankYouMessages = [];
    
    // Iterate through each name in the 'names' array
    for (let i = 0; i < names.length; i++) {
        // Concatenate the thank you message with the name and event, then push it to the array
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    // Return the array containing all the thank you messages
    return thankYouMessages;
}

// Call the function and log the result
console.log(writeCards(names, event));

// Function to count down from a positive number to 0
function countDown(positiveNumber) {
    // Loop until the positiveNumber reaches 0
    while (positiveNumber >= 0) {
        // Log the current value of positiveNumber
        console.log(positiveNumber);
        // Decrement positiveNumber by 1 in each iteration
        positiveNumber--;
    }
}

// Call the function with an initial value of 10 and log the result
console.log(countDown(10));
