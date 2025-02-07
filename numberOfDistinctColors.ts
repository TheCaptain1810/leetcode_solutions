function queryResults(limit: number, queries: number[][]): number[] {
    const ballColors: Map<number, number> = new Map();
    const colorCount: Map<number, number> = new Map();
    const distinctColors: Set<number> = new Set();
    const result: number[] = [];

    for (const [ball, color] of queries) {
        if (ballColors.has(ball)) {
            const prevColor = ballColors.get(ball) as number;
            if (prevColor === color) {
                result.push(distinctColors.size);
                continue;
            }

            colorCount.set(prevColor, (colorCount.get(prevColor) || 0) - 1);
            if (colorCount.get(prevColor) === 0) {
                distinctColors.delete(prevColor);
                colorCount.delete(prevColor);
            }
        }

        ballColors.set(ball, color);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        distinctColors.add(color);

        result.push(distinctColors.size);
    }

    return result;
};