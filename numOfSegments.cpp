class Solution
{
public:
    int countSegments(string s)
    {
        int count = 0;
        bool inSegment = false;

        for (int i = 0; i < s.length(); i++)
        {
            if (s[i] != ' ')
            {
                if (!inSegment)
                { // not in the segment means it's a start of new segment
                    count++;
                    inSegment = true;
                }
            }
            else
            {
                // encountering space means end of current segment
                inSegment = false;
            }
        }

        return count;
    }
};