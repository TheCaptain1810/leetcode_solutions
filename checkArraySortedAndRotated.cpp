class Solution
{
public:
    bool check(vector<int> &nums)
    {
        int count = 0;
        int numsLength = nums.size();

        for (int i = 0; i < numsLength; i++)
        {
            if (nums[i] > nums[(i + 1) % numsLength])
            {
                count++;
                if (count > 1)
                    return false;
            }
        }

        return true;
    }
};