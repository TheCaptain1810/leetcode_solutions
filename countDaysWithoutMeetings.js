/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
  const sortedMeetings = meetings.sort((a, b) => a[0] - b[0]);
  const n = sortedMeetings.length;

  let count = 0;
  let maxEnd = sortedMeetings[0][1];

  if (sortedMeetings[0][0] > 1) {
    count += sortedMeetings[0][0] - 1;
  }

  for (let i = 0; i < n - 1; ++i) {
    maxEnd = Math.max(maxEnd, sortedMeetings[i][1]);
    let nextStart = sortedMeetings[i + 1][0];

    if (maxEnd < nextStart) {
      count += nextStart - maxEnd - 1;
    }
  }

  maxEnd = Math.max(maxEnd, sortedMeetings[n - 1][1]);
  if (maxEnd < days) {
    count += days - maxEnd;
  }

  return count;
};
