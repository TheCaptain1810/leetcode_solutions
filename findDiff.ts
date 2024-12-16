function findTheDifference(s: string, t: string): string {
    let setOfLetters: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        setOfLetters[s[i]] = (setOfLetters[s[i]] || 0) + 1;
    }

    for (let j = 0; j < t.length; j++) {
        if (setOfLetters[t[j]]) {
            setOfLetters[t[j]]--;
        } else {
            return t[j];
        }
    }

    return "";
}
