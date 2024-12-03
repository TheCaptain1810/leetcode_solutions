class Solution
{
public:
    int missingNumber(vector<int> &nums)
    {
        int lengthOfNums = nums.size();
        int sumOfNumbersTillN = lengthOfNums * (lengthOfNums + 1) / 2;

        int sumOfNums = 0;
        for (int i = 0; i < lengthOfNums; i++)
        {
            sumOfNums += nums[i];
        }

        return sumOfNumbersTillN - sumOfNums;
    }
};