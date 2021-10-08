import { obj2scheme } from "obj2scheme";

interface IScheme {
    type: "object";
    properties?: object;
}

const _types = {
    number: () => { return { type: "number" } },
    string: () => { return { type: "string" } },
    object: () => { return { type: "object", properties: {} } },
    array: (length?: number) => {
        let object = { type: "array" }
        if (length && typeof length == "number") object["length"] = length;
        return object;
    },
    
}

const sortDict = (obj: object): object => {
    let sortedKeys = Object.keys(obj).sort();
    let sortedDict = {};
    for (let i of sortedKeys) {
        if (typeof obj[i] === "object" && !obj[i].length)
        sortedDict[i] = obj[i];
    }    
    return sortedDict;
}

const compareDict = (obj1: object, obj2: object): boolean => {
    let sortedDict1 = sortDict(obj1);
    let sortedDict2 = sortDict(obj2);
    return JSON.stringify(sortedDict1) == JSON.stringify(sortedDict2);
}

const newScheme = (schemeTemplate: object): IScheme => {
    return { type: "object", properties: schemeTemplate};
}

const isValid = (scheme: IScheme, object: object): boolean => {
    const objectScheme = obj2scheme(object);
    return compareDict(scheme, objectScheme);
}

export const valdo = {
    types: _types,
    isValid,
    newScheme,
    sortDict,
    compareDict,
};

let myScheme = valdo.newScheme({
    name: valdo.types.string(),
    age: valdo.types.number(),
})

let obj = {
    name: "Aziz",
    age: 16
}

console.log(
    valdo.isValid(myScheme, obj)
)