function smallestNumber(pattern: string): string {
    const n = pattern.length;
    let num = "";
    const used: Set<number> = new Set();

    function backtrack(index) {
        if (index === n + 1) {
            return true;
        }

        for (let digit = 1; digit <= 9; digit++) {
            if (used.has(digit)) {
                continue;
            }

            const digitStr = String(digit);

            if (index > 0) {
                if (pattern[index - 1] === "I" && Number(num[index - 1]) >= digit) {
                    continue;
                }
                if (pattern[index - 1] === "D" && Number(num[index - 1]) <= digit) {
                    continue;
                }
            }

            num += digitStr;
            used.add(digit);

            if (backtrack(index + 1)) {
                return true;
            }

            num = num.slice(0, num.length - 1);
            used.delete(digit);
        }

        return false;
    }

    backtrack(0);
    return num;
};

// This solution is crazy good!
function smallestNumber(pattern: string): string {
    const stack: number[] = [];
    const res: string[] = [];

    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);

        while (stack.length > 0 && (i === pattern.length || pattern[i] === "I")) {
            res.push(String(stack.pop()));
        }
    }

    return res.join("");
};