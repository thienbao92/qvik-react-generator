const space = number => {
  return "\t".repeat(number);
};
const chars = {
  open_parenThesis: "\u0028",
  close_parenThesis: "\u0029",
  return: "\n",
  space: space
};

module.exports = chars;
