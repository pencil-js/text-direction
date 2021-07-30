import test from "ava";
import textDirection from "./text-direction.js";

test("Is not crashing", (t) => {
    t.is(textDirection(), "");
});
