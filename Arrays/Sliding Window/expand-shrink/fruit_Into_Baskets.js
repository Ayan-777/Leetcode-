// 904. Fruit Into Baskets
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
//     You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
//     Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
//     Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 2:
// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Example 3:
// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].



var totalFruit = function(fruits) {
    let left = 0;    
    let right = 0;     
    let maxLen = 0;  
    let basket = new Map(); // I renamed 'map' to 'basket' to make it clearer

    while (right < fruits.length) {
        // 1. Pick a fruit and put it in the basket
        let currentFruit = fruits[right];
        basket.set(currentFruit, (basket.get(currentFruit) || 0) + 1);

        // 2. If we have more than 2 types of fruit, start shrinking from the left
        while (basket.size > 2) {
            let leftFruit = fruits[left];
            basket.set(leftFruit, basket.get(leftFruit) - 1);

            // 3. If the count of a fruit hits 0, remove it from the basket entirely
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            left++; // Move the left side of the window forward
        }

        // 4. Measure the window and keep the biggest size we've seen
        maxLen = Math.max(maxLen, right - left + 1);
        right++; // Move the right side of the window forward
    }

    return maxLen;
};