function countPrefixSuffixPairs(words: string[]): number {
    let result = 0;

    function isPrefixAndSuffix(str1: string, str2: string): boolean {
        if (!str2.startsWith(str1)) return false;
        if (!str2.endsWith(str1)) return false;
        return true;
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                result++;
            }
        }
    }

    return result;
};