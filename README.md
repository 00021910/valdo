
# valdo

Minimalists' compact JSON-Validation library.

### Used Dependencies:
- Microsoft's [typescript](https://github.com/microsoft/TypeScript) language
- My own [obj2scheme](https://github.com/AzizbekTheDev/obj2scheme) library

### Usage:

```
// After importing/declaring valdo...
let myScheme = valdo.newScheme({
    name: valdo.types.string(),
    age: valdo.types.number(),
}) // Created a scheme to validate with

let obj = {
    name: "Aziz",
    age: 16
} // Object to be validated

console.log(
    valdo.isValid(myScheme, obj)
) // returns true
```
