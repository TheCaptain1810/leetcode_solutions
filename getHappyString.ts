function getHappyString(n: number, k: number): string {
    const totalHappyStrings = 3 * Math.pow(2, n - 1);

    let choices = "abc";
    let left = 1;
    let right = totalHappyStrings;
    let res = "";

    for (let i = 0; i < n; i++) {
        let curr = left;
        let partitionSize = Math.floor((right - left + 1) / choices.length);

        for (let c of choices) {
            if (curr <= k && k < curr + partitionSize) {
                res += c;
                left = curr;
                right = curr + partitionSize - 1;
                choices = "abc".replace(c, "");
                break;
            }
            curr += partitionSize;
        }
    }

    return res;
};