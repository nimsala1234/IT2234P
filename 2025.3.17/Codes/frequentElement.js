//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let mostFrequentElement = arr[0];  // Start with the first element as the initial most frequent
let maxCount = 1;  // We start by assuming the first element appears once

// Loop through each element of the array using forEach
arr.forEach((currentElement) => {
    let count = 0;  // Reset the count for each element

    // Count occurrences of currentElement using a simple for loop
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            count++;  // Increment count when currentElement matches arr[i]
        }
    }

    // If the current element has a higher frequency than the maxCount, update
    if (count > maxCount) {
        maxCount = count;
        mostFrequentElement = currentElement;
    }
});

console.log("Most frequent element:", mostFrequentElement);
