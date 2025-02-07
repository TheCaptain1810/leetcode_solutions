function queryResults(limit: number, queries: number[][]): number[] {
    const ballColors: Map<number, number> = new Map();
    const colorCount: Map<number, number> = new Map();
    const result: number[] = [];

    for (const [ball, color] of queries) {
        if (ballColors.has(ball)) {
            const prevColor = ballColors.get(ball) as number;
            if (prevColor === color) {
                result.push(colorCount.size);
                continue;
            }

            colorCount.set(prevColor, colorCount.get(prevColor) as number - 1);
            if (colorCount.get(prevColor) === 0) {
                colorCount.delete(prevColor);
            }
        }

        ballColors.set(ball, color);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);

        result.push(colorCount.size);
    }

    return result;
};