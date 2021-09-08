/**
 *  An array is monotonic if it is either monotone increasing or monotone decreasing.
    An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
    Return true if and only if the given array A is monotonic.
    https://leetcode.com/problems/monotonic-array/
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    if (A.length == 1 || A.length == 0) return true;
    let booleanArray = [];
    for (let i = 0; i < A.length - 1; i++) {
        let j = i + 1;
        booleanArray.push(A[i] - A[j]);
    }
    return checkAns(booleanArray);
};

function checkAns(newA) {
    let isIncreasing = false;
    let isDecreasing = false;
    let count = 0;

    newA.forEach(ele => {
        if (ele > 0) isIncreasing = true;
        if (ele < 0) isDecreasing = true;
        if (ele == 0) count++;
    })

    if (isIncreasing == isDecreasing) {
        if (count > 0 && count == newA.length) {
            return true;
        }
        return false;
    } else {
        return true;
    }
}