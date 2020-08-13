const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

const multiplesOf5 = [];

// your loop here ...

console.log("check multiples of 5 up to 100 (but excluding 5 itself) are pushed into the array");

try {
  check(multiplesOf5).isEqualTo([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);

  printGreenMessage("Success :)");
} catch (error) {
  printRedMessage(error);
}
