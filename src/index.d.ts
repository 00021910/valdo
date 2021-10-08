declare module valida {
    interface IScheme {
        type: "object";
        properties?: object;
    };
    const valida: object = {
        sortDict: (obj: object): object => {},
        compareDict: (obj1: object, obj2: object): boolean => {},
        newScheme: (schemeTemplate: object): IScheme => {},
        isValid: (scheme: IScheme, obj: object): bool => {},
    };
}