function maxScoreSightseeingPair(values: number[]): number {
    let maxScore: number = 0;
    let maxPrev: number = values[0] + 0;

    for (let j = 1; j < values.length; j++) {
        maxScore = Math.max(maxScore, maxPrev + (values[j] - j));
        maxPrev = Math.max(maxPrev, values[j] + j);
    }

    return maxScore;
};