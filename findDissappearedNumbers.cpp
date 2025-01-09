class Solution
{
public:
    vector<int> findDisappearedNumbers(vector<int> &nums)
    {
        vector<int> missingNumbers;

        for (int i = 0; i < nums.size(); i++)
        {
            int index = abs(nums[i]) - 1;
            nums[index] = -abs(nums[index]);
        }

        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] > 0)
            {
                missingNumbers.push_back(i + 1);
            }
        }

        return missingNumbers;
    }
};