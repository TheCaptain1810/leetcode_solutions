function canConstruct(ransomNote: string, magazine: string): boolean {
    let charCount: number[] = new Array(26).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        charCount[magazine.charCodeAt(i) - 97]++;
    }

    for (let j = 0; j < ransomNote.length; j++) {
        let index: number = ransomNote.charCodeAt(j) - 97;
        if (charCount[index] > 0) {
            charCount[index]--;
        } else {
            return false;
        }
    }

    return true;
};