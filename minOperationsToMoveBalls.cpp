class Solution
{
public:
    vector<int> minOperations(string boxes)
    {
        int n = boxes.length();
        vector<int> answer(n, 0);

        int ballsToLeft = 0;
        int leftOperations = 0;
        for (int i = 0; i < n; i++)
        {
            answer[i] += leftOperations;
            ballsToLeft += boxes[i] == '1' ? 1 : 0;
            leftOperations += ballsToLeft;
        }

        int ballsToRight = 0;
        int rightOperations = 0;
        for (int i = n - 1; i >= 0; i--)
        {
            answer[i] += rightOperations;
            ballsToRight += boxes[i] == '1' ? 1 : 0;
            rightOperations += ballsToRight;
        }

        return answer;
    }
};