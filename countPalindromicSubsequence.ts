function countPalindromicSubsequence(s: string): number {
    const seen: Set<string> = new Set();
    const firstOccurrence: number[] = new Array(26).fill(-1);
    const lastOccurrence: number[] = new Array(26).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const charIdx: number = s.charCodeAt(i) - 97;
        if (firstOccurrence[charIdx] === -1) {
            firstOccurrence[charIdx] = i;
        }
        lastOccurrence[charIdx] = i;
    }

    for (let charIdx = 0; charIdx < 26; charIdx++) {
        const start: number = firstOccurrence[charIdx];
        const end: number = lastOccurrence[charIdx];

        if (start !== -1 && end !== -1 && start < end) {
            const middleChars: Set<string> = new Set();
            
            for (let i = start + 1; i < end; i++) {
                middleChars.add(s[i]);
            }

            for (const middle of middleChars) {
                seen.add(String.fromCharCode(charIdx + 97) + middle + String.fromCharCode(charIdx + 97));
            }
        }
    }

    return seen.size;
};