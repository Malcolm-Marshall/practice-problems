/*
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let longest = 0;
  let allSubStrings = [];
  let tempString = '';
  // console.warn(s, s.length, longest, allSubStrings, tempString)

  if (s.length === 1) {
    return 1;
  };

  if (s.length === 0) {
    return 0;
  }

  for ( let i = 0; i < s.length; i++) {
    if (!tempString.includes(s[i])) {
      tempString += s[i];
      allSubStrings.push(tempString.length)
      console.warn('first',{tempString}, {i})
    } else if (tempString.includes(s[i])) {
      tempString = '';
      i = i--;
      allSubStrings.push(tempString.length);
      console.warn('second', {tempString}, {i})
    }
  }
  // console.warn('===', Math.max(...allSubStrings), {longest}, {allSubStrings}, {tempString})
  return Math.max(...allSubStrings);

};

let string = "dvdf";

lengthOfLongestSubstring(string);

//317 of 987 tests passed