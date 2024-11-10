"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTotalOfferPeriods' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY sales as parameter.
 */

function getTotalOfferPeriods(sales) {
  const n = sales.length;
  let offerPeriods = 0;

  // For each possible starting position
  for (let i = 0; i < n; i++) {
    // For each possible ending position
    for (let j = i; j < n; j++) {
      // Skip periods of length 1 or 2
      if (j - i < 2) continue;

      // Check if all elements between i and j are less than
      // both ends
      let isValid = true;
      const minEnds = Math.min(sales[i], sales[j]);

      for (let k = i + 1; k < j; k++) {
        if (sales[k] >= minEnds) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        offerPeriods++;
        console.log(`Valid period: ${i} to ${j}`);
      }
    }
  }

  console.log("Input array:", sales);
  console.log("Total offer periods:", offerPeriods);

  return offerPeriods;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const salesCount = parseInt(readLine().trim(), 10);

  let sales = [];

  for (let i = 0; i < salesCount; i++) {
    const salesItem = parseInt(readLine().trim(), 10);
    sales.push(salesItem);
  }

  const result = getTotalOfferPeriods(sales);

  ws.write(result + "\n");

  ws.end();
}

// Please make the changes to the code to make it more efficient and create an issue.
