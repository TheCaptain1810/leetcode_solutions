class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        if (s.length() != t.length())
            return false;

        vector<int> count(26, 0);

        for (int i = 0; i < s.length(); i++)
        {
            count[s[i] - 97]++;
            count[t[i] - 97]--;
        }

        for (int val : count)
        {
            if (val != 0)
                return false;
        }

        return true;
    }
};