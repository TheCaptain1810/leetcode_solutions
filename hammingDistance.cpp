class Solution
{
public:
    int hammingDistance(int x, int y)
    {
        int diff = x ^ y;
        int hammingDistance = 0;

        while (diff > 0)
        {
            hammingDistance += diff & 1;
            diff >>= 1;
        }

        return hammingDistance;
    }
};