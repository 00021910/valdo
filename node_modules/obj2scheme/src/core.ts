interface IScheme {
    type: object | string;
    properties?: object;
}

let schemeFiller = (scheme: IScheme | any, root: object) => {
    for (let key in root) {
        if (typeof root[key] === "object") { 
            if (root[key].length) {
                scheme.properties[key] = { type: "array", length: root[key].length };
            } else {
                scheme.properties[key] = { type: "object", properties: {}}
                schemeFiller(scheme.properties[key], root[key]); 
            }
        }
        else scheme.properties[key] = { type: typeof root[key] };
    }
}

export let obj2scheme = (jsonObj: object) => {
    let scheme: IScheme = { type: "object", properties: {} };
    schemeFiller(scheme, jsonObj);
    if (typeof jsonObj !== 'object') scheme = {type: "error", properties: { message: "please, pass a json object"}};
    return scheme;
}