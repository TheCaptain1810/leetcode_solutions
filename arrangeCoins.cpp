#define ll long long

class Solution
{
public:
    int arrangeCoins(int n)
    {
        int left = 0, right = n;
        int result = 0;

        while (left <= right)
        {
            ll mid = left + (right - left) / 2;
            ll totalCoins = (mid * (mid + 1)) / 2;

            if (totalCoins == n)
                return mid;
            if (totalCoins < n)
            {
                result = mid;
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return result;
    }
};