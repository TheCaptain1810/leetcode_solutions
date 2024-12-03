// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution
{
public:
    int firstBadVersion(int n)
    {
        int start = 1, end = n;

        while (start < end)
        {                                        // Strict inequality to avoid infinite loop
            int mid = start + (end - start) / 2; // Avoid overflow
            if (isBadVersion(mid))
            {
                end = mid; // The first bad version is at mid or earlier
            }
            else
            {
                start = mid + 1; // The first bad version is after mid
            }
        }

        // At this point, start === end and points to the first bad version
        return start;
    }
};