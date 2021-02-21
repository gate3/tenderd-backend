export const invalidValueSuppliedError = (fieldName:string) => (new Error(`${fieldName} - was either not supplied or the value is invalid.`))
