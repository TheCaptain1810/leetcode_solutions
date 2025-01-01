function maxScore(s: string): number {
    let maxScore = 0
    let leftZeros: number = 0, rightOnes: number = 0;

    for (let char of s) {
        if (char === '1') {
            rightOnes++;
        }
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }
        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }

    return maxScore;
};