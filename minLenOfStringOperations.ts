function minimumLength(s: string): number {
    let charFreq: number[] = new Array(26).fill(0);
    let totalLength = 0;

    for (const currentChar of s) {
        charFreq[currentChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (const frequency of charFreq) {
        if (frequency === 0) continue;

        if (frequency % 2 === 0) {
            totalLength += 2;
        } else {
            totalLength++;
        }
    }

    return totalLength;
};