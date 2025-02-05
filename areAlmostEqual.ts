function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;

    let diffIndices: number[] = [];
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffIndices.push(i);
            if (diffIndices.length > 2) return false;
        }
    }
    
    if (diffIndices.length !== 2) return false;
    
    const [i, j] = diffIndices;
    return s1[i] === s2[j] && s1[j] === s2[i];
};