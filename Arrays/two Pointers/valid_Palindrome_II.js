// Given a string s, return true if the s can be palindrome after deleting at most one character from it.


// Example 1:
// Input: s = "aba"
// Output: true
// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:
// Input: s = "abc"
// Output: false


var validPalindrome = function (s) {
    if (s.length === 0) return 0;

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return subchecker(s, left+1, right ) || subchecker(s, left, right-1)
        }
        left++
        right--
    }
    return true
};

function subchecker(s, left, right,) {
    while (left < right) {
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abc"))