"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valida = void 0;
const obj2scheme_1 = require("obj2scheme");
const _types = {
    number: () => { return { type: "number" }; },
    string: () => { return { type: "string" }; },
    object: () => { return { type: "object", properties: {} }; },
    array: (length) => {
        let object = { type: "array" };
        if (length && typeof length == "number")
            object["length"] = length;
        return object;
    },
};
const sortDict = (obj) => {
    let sortedKeys = Object.keys(obj).sort();
    let sortedDict = {};
    for (let i of sortedKeys) {
        if (typeof obj[i] === "object" && !obj[i].length)
            sortedDict[i] = obj[i];
    }
    return sortedDict;
};
const compareDict = (obj1, obj2) => {
    let sortedDict1 = sortDict(obj1);
    let sortedDict2 = sortDict(obj2);
    return JSON.stringify(sortedDict1) == JSON.stringify(sortedDict2);
};
const newScheme = (schemeTemplate) => {
    return { type: "object", properties: schemeTemplate };
};
const isValid = (scheme, object) => {
    const objectScheme = (0, obj2scheme_1.obj2scheme)(object);
    return compareDict(scheme, objectScheme);
};
exports.valida = {
    types: _types,
    isValid,
    newScheme,
    sortDict,
    compareDict,
};
let myScheme = exports.valida.newScheme({
    name: exports.valida.types.string(),
    age: exports.valida.types.number(),
});
let obj = {
    name: "Aziz",
    age: 16
};
console.log(exports.valida.isValid(myScheme, obj));
//# sourceMappingURL=index.js.map