
# valdo

Minimalists' compact JSON-Validation library.

### Used Dependencies:
- Microsoft's [typescript](https://github.com/microsoft/TypeScript) language
- My own [obj2scheme](https://github.com/AzizbekTheDev/obj2scheme) library

### Usage:

```js
// After importing/declaring valdo...
let myScheme = valdo.newScheme({
    property1: valdo.types.string(),
    property2: valdo.types.number(),
}) // Created a scheme to validate with

let obj1 = {
    property1: "string",
    property2: 123
} // Object that can pass the validation

let obj2 = {
    property1: 456,
    property2: "xyz"
}

console.log(
    valdo.isValid(myScheme, obj1)
) // returns true

console.log(
    valdo.isValid(myScheme, obj2)
) // returns false, property types are not matching
```
