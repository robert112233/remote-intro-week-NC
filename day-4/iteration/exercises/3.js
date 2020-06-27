const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const items = [];

// your loop here...

console.log("check numbers starting at 42 and descending are pushed into an array");
try {
  check(items).isEqualTo([
    42,
    41,
    40,
    39,
    38,
    37,
    36,
    35,
    34,
    33,
    32,
    31,
    30,
    29,
    28,
    27,
    26,
    25,
    24,
    23,
    22,
    21,
    20,
    19,
    18,
    17,
    16,
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
  ]);
  
  printGreenMessage("Success :)");
} catch (e) {
  printRedMessage(e);
}
