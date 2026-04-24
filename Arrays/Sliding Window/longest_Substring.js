// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest without duplicate characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let map = {};
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    map[char] = (map[char] || 0) + 1;

    while (map[char] > 1) {
      map[s[left]] -= 1;
      left++;
    }

    max = Math.max(max, right - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
