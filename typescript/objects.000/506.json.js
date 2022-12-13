"use strict";
var JsonDemo;
(function (JsonDemo) {
    const o1 = {
        foo: "foo1",
        bar: "bar",
        war: ["haha", 1, "xixi", { xixi: "xixi", haha: "haha" }]
    };
    console.info(o1);
    const json1 = JSON.stringify(o1, null, 2);
    console.info(json1);
    const o2 = JSON.parse(json1);
    console.info(o2);
})(JsonDemo || (JsonDemo = {}));
