function shiftingLetters(s: string, shifts: number[][]): string {
    const n = s.length;
    const shiftArray: number[] = new Array(n + 1).fill(0);

    for (const [start, end, direction] of shifts) {
        const shiftValue = direction === 1 ? 1 : -1;
        shiftArray[start] += shiftValue;
        shiftArray[end + 1] -= shiftValue;
    }

    for (let i = 1; i < n; i++) {
        shiftArray[i] += shiftArray[i - 1];
    }

    let result = '';
    for (let i = 0; i < n; i++) {
        const shift = shiftArray[i] % 26;
        const newCharCode = ((s.charCodeAt(i) - 97 + shift + 26) % 26) + 97;
        result += String.fromCharCode(newCharCode);
    }

    return result;
};