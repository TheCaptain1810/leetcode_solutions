/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascalTriangle = [];

  for (let i = 0; i < numRows; i++) {
    pascalTriangle[i] = [];
    pascalTriangle[i][0] = 1;
    pascalTriangle[i][i] = 1;

    for (let j = 1; j < i; j++) {
      pascalTriangle[i][j] =
        pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
  }

  return pascalTriangle;
};

// Just return the last row of the Pascal's Triangle
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let row = new Array(rowIndex + 1).fill(1);

  for (let i = 1; i < rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] += row[j - 1];
    }
  }

  return row;
};

// C++ cos who doesn't like it?
/* 
class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> pascalTriangle = {};

        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1);

            for (int j = 1; j < i; j++) {
                row[j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
            }

            pascalTriangle.push_back(row);
        }

        return pascalTriangle;
    }
};

class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> row(rowIndex + 1, 1);

        for (int i = 1; i < rowIndex; i++) {
            for (int j = i; j > 0; j--) {
                row[j] += row[j - 1];
            }
        }

        return row;
    }
};
*/
