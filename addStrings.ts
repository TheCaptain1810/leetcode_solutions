function addStrings(num1: string, num2: string): string {
    let result: string = "";
    let carry: number = 0;

    let i: number = num1.length - 1;
    let j: number = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1: number = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        const digit2: number = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

        const sum: number = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result;
};