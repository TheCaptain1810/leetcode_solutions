function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let i = 0;
    let j = s.length - 1;
    const stringArray = s.split("");

    while (i < j) {
        if (vowels.has(stringArray[i]) && vowels.has(stringArray[j])) {
            [stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]];
            i++;
            j--;
        } else if (!vowels.has(stringArray[i])) {
            i++;
        } else {
            j--;
        }
    }

    return stringArray.join("");
}
