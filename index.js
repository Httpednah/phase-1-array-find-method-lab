// code your solution here
function superbowlWin(record) {
  // Use find to get the first object where result is 'W'
  const win = record.find((game) => game.result === "W");

  // If a win is found, return the year, otherwise undefined
  return win ? win.year : undefined;
}
