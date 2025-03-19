//arr = [1,2,3,4,5,6]
//target = 7
//write a code to find all the pairs that sum up to the target

let sourceArr = [1,2,3,4,5,6]
let target = 7
let n = sourceArr.length;

// Check for pairs
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (sourceArr[i] + sourceArr[j] === target) {
            console.log(`Pair: (${sourceArr[i]}, ${sourceArr[j]})`);
        }
    }
}

// Check for triplets
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (sourceArr[i] + sourceArr[j] + sourceArr[k] === target) {
                console.log(`Triplet: (${sourceArr[i]}, ${sourceArr[j]}, ${sourceArr[k]})`);
            }
        }
    }
}