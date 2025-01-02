function vowelStrings(words: string[], queries: number[][]): number[] {
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u']);

    const prefixSum: number[] = new Array(words.length + 1).fill(0);
    for (let i = 0; i < words.length; i++) {
        const word: string = words[i];
        const startsWithVowel: boolean = vowels.has(word[0]);
        const endsWithVowel: boolean = vowels.has(word[word.length - 1]);
        prefixSum[i + 1] = prefixSum[i] + (startsWithVowel && endsWithVowel ? 1 : 0);
    }

    const ans: number[] = [];
    for (const [li, ri] of queries) {
        ans.push(prefixSum[ri + 1] - prefixSum[li]);
    }
    
    return ans;
};