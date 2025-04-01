#define ll long long

class Solution
{
public:
    long long mostPoints(vector<vector<int>> &questions)
    {
        const int N = questions.size();
        vector<ll> dp(N + 1, 0);

        for (int i = N - 1; i >= 0; --i)
        {
            const int POINTS = questions[i][0];
            const int BRAINPOWER = questions[i][1];

            ll skip = dp[i + 1];

            int nextIdx = min(N, i + BRAINPOWER + 1);
            ll solve = POINTS + dp[nextIdx];

            dp[i] = max(solve, skip);
        }

        return dp[0];
    }
};