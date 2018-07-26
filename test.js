import test from "ava";
import textDirection from "./text-direction";

test("text-direction", (t) => {
    t.is(textDirection.constructor.name, "Function");
    t.throws(() => textDirection(), ReferenceError, "Don't work in a node environment.");
});
