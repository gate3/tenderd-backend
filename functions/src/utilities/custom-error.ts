class CustomError extends Error {
    statusCode:number = 0;

    constructor(...params: any) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}

export default CustomError;
