/**
 * Given two strings text1 and text2, return the length of their longest 
 * common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original 
 * string with some characters (can be none) deleted without changing the 
 * relative order of the remaining characters.
 * 
 * For example, "ace" is a subsequence of "abcde".
 * 
 * A common subsequence of two strings is a subsequence that is common to both strings.
 */

function lgstCmmnSbsqunc(str1, str2) {
    let n = str1.length;
    let m = str2.length ;
    let dp = Array.from({length: n + 1}, () => Array.from({length: m + 1}, () => 0));
    dp[0][0] = 1;


    let i = 1;

    while (i <= str1.length) {
        let f = 0;
        while (f <= str2.length) {
            
            if (i === 0 || f === 0) {
                f++;
                continue;
            
            } else if (str1[i - 1].toLowerCase() === str2[f - 1].toLowerCase()) {
            
                dp[i][f] = dp[i - 1][f - 1] + 1;
                 
            } else {
            
                dp[i][f] = Math.max(dp[i - 1][f], dp[i][f - 1]);
            
            }
            f++;
        }
        i++;
       
    }

    return dp[n][m];

}

const word1 = 'Fernando';

const word2 = 'Armando'

console.log('Input: ', 'Word 1 - ', word1, ' word 2 - ', word2);

const res  = lgstCmmnSbsqunc(word1, word2);

console.log(res);