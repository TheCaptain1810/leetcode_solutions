function canBeValid(s: string, locked: string): boolean {
    if (s.length % 2 !== 0) return false;

    let openMin = 0, openMax = 0;
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '1') {
            if (s[i] === '(') {
                openMin++;
                openMax++;
            } else {
                openMin--;
                openMax--;
            }
        } else {
            openMin--;
            openMax++;
        }

        openMin = Math.max(openMin, 0);
        if (openMax < 0) return false;
    }

    openMin = 0;
    openMax = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === '1') {
            if (s[i] === ')') {
                openMin++;
                openMax++;
            } else {
                openMin--;
                openMax--;
            }
        } else {
            openMin--;
            openMax++;
        }

        openMin = Math.max(openMin, 0);
        if (openMax < 0) return false;
    }

    return true;
};