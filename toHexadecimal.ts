function toHex(num: number): string {
    if (num === 0) return "0";

    if (num < 0) {
        num += Math.pow(2, 32);
    }

    let hexChars: string = "0123456789abcdef";
    let result: string = "";

    while (num > 0) {
        let remainder: number = num % 16;
        result = hexChars[remainder] + result;
        num = Math.floor(num / 16);
    }

    return result;
};