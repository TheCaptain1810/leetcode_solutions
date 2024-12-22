function longestPalindrome(s: string): number {
    let freq: number[] = new Array(128).fill(0);
    let count: number = 0;

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i)]++;
        if (freq[s.charCodeAt(i)] % 2 === 0) {
            count += 2;
        }
    }

    return count < s.length ? count + 1 : count;
};