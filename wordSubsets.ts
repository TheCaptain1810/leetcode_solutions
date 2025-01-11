function wordSubsets(words1: string[], words2: string[]): string[] {
    const getCharFrequency = (word): number[] => {
        const freq: number[] = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    }

    const maxFreq: number[] = new Array(26).fill(0);
    for (const word of words2) {
        const freq: number[] = getCharFrequency(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    const universalStrings: string[] = [];
    for (const word of words1) {
        const freq: number[] = getCharFrequency(word);
        let isUniversal = true;

        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) {
            universalStrings.push(word);
        }
    }

    return universalStrings;
};