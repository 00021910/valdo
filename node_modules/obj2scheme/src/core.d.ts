declare module obj2scheme {
    export interface IScheme { type: "object", properties?: object }
    function schemeFiller(scheme: IScheme | any, root: object): void;
    export function obj2scheme(jsonobj: object): IScheme;
}