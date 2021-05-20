const assert = require("assert");
const Rooster = require("./../Rooster");

//setup
//exercise
//verify

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      const correctCall = "cock-a-doodle-doo!";

      const methodCall = Rooster.announceDawn();

      assert.equal(correctCall, methodCall);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      const correctCall = "5";

      const methodCall = Rooster.timeAtDawn(5);
      assert.strictEqual(correctCall, methodCall);
    });

    it("throws an error if passed a number less than 0", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(-2);
      }, RangeError);
    });
    it("throws an error if passed a number greater than 23", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(25);
      }, RangeError);
    });
  });
});
