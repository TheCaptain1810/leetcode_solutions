/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
*/


function guessNumber(n: number): number {
    let start: number = 1;
    let end: number = n;

    while (start <= end) {
        let mid: number = start + Math.floor((end - start) / 2);
        let apiResult: number = guess(mid);

        if(apiResult === 0) return mid;

        if (apiResult === -1) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
};