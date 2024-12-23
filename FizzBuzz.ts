function fizzBuzz(n: number): string[] {
    return Array.from({ length: n }, (_, i) => {
        let num = i + 1;
        if (num % 15 === 0) return "FizzBuzz";
        if (num % 3 === 0) return "Fizz";
        if (num % 5 === 0) return "Buzz";
        return `${num}`;
    });
}
