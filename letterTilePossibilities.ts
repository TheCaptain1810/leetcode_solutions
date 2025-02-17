function numTilePossibilities(tiles: string): number {
    const counts: number[] = new Array(26).fill(0);
    for (const char of tiles) {
        counts[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    let count = 0;
    function backtrack(counts: number[]): void {
        for (let i = 0; i < 26; i++) {
            if (counts[i] > 0) {
                count++;
                counts[i]--;
                backtrack(counts);
                counts[i]++;
            }
        }
    }

    backtrack(counts);
    return count;
};