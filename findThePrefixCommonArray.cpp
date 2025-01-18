class Solution {
public:
    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
        vector<int> prefixSums(A.size() + 1, 0);
        vector<int> result;
        int count = 0;

        for (int i = 0; i < A.size(); i++) {
            prefixSums[A[i]]++;
            prefixSums[B[i]]++;

            if (A[i] == B[i]) {
                count++;
            } else {
                if (prefixSums[A[i]] == 2)
                    count++;
                if (prefixSums[B[i]] == 2)
                    count++;
            }

            result.push_back(count);
        }

        return result;
    }
};