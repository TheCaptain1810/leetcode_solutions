function canConstruct(s: string, k: number): boolean {
    if (k > s.length) return false;

    let freq: number[] = new Array(26).fill(0);
    for (let char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let oddCount = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 !== 0) {
            oddCount++;
        }
    }

    if (k < oddCount) return false;

    return true;
};