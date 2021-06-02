
export class BadRequestError extends Error {
        constructor(massage: string) {
            super(`Bad request! \n ${massage}`);
        }
}

