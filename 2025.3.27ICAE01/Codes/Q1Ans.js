function getMaxPurchase(budget, keyboards, mice) {
    let maxSpend = -1;

    for (let k of keyboards) {
        for (let m of mice) {
            let total = k + m;
            if (total <= budget && total > maxSpend) {
                maxSpend = total;
            }
        }
    }

    return maxSpend;
}

let result1 = getMaxPurchase(60, [40, 50, 60], [5, 8, 12]);
let result2 = getMaxPurchase(10, [3, 1], [5, 2, 8]);
let result3 = getMaxPurchase(20, [30, 15], [8,10,6]);

console.log("Result for Budget 60:", result1);
console.log("Result for Budget 10:", result2);
console.log("Result for Budget 20:", result3); 