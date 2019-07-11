import test from "ava";
import browserEnv from "browser-env";
import textDirection from ".";

browserEnv(["document"]);

test("Is not crashing", (t) => {
    t.is(textDirection(), "");
});
