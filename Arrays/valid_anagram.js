// Topics
// premium lock iconCompanies
// Given two strings s and t, return true if t is an of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false




const isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let map = {};

    for(let char of s){
        map[char] = (map[char] || 0) +1
    }

    for(let char of t){
        if(!map[char]){
            return false
        }
        map[char]--
    }

    for(let key in map){
        if(map[key] !== 0){
            return false
        }
    }
    return true
};



