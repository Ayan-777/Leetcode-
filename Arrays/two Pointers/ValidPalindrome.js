// Valid Palindrome


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



var isPalindrome = function(s) {
    if(s.length === 0) return 0;
    let clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = clean.length - 1;

    while (left <= right) {
        if(clean[left] !== clean[right]){
            return false
        }
        left++
        right--
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
