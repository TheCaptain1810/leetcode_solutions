function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const m = mat.length;
    const n = mat[0].length;

    const posMap = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            posMap.set(mat[i][j], [i, j]);
        }
    }

    const rowPainted: number[] = new Array(m).fill(0);
    const colPainted: number[] = new Array(n).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const [row, col]: [number, number] = posMap.get(arr[i]);

        rowPainted[row]++;
        colPainted[col]++;

        if (rowPainted[row] === n || colPainted[col] === m) {
            return i;
        }
    }

    return -1;
};