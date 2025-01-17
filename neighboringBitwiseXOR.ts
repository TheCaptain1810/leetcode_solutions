function doesValidArrayExist(derived: number[]): boolean {
    let n = derived.length;
    let ans = 0;

    for (let i = 0; i < n; i++){
        ans ^= derived[i];
    }

    if (ans === 0)return true;
    return false;
};