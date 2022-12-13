"use strict";
var ProtoDemo;
(function (ProtoDemo) {
    let o1 = { foo: "bar" };
    console.info(o1['foo']);
    console.info(o1['bar']);
})(ProtoDemo || (ProtoDemo = {}));
