function findDifferentBinaryString(nums: string[]): string {
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        if (nums[i][i] === "0") {
            result += "1";
        } else {
            result += "0";
        }
    }
    return result;
};