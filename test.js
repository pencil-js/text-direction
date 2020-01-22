import test from "ava";
import textDirection from ".";

test("Is not crashing", (t) => {
    t.is(textDirection(), "");
});
