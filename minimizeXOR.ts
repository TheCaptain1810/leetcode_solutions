function minimizeXor(num1: number, num2: number): number {
    let numSetBits = num2.toString(2).split('1').length - 1;
    
    let x = 0;
    for (let i = 31; i >= 0; i--) {
        if (numSetBits === 0) break;
        if ((num1 & (1 << i)) !== 0) {
            x |= (1 << i);
            numSetBits--;
        }
    }

    for (let i = 0; i < 32; i++) {
        if (numSetBits === 0) break;
        if ((x & (1 << i)) === 0) {
            x |= (1 << i);
            numSetBits--;
        }
    }
    
    return x;
};