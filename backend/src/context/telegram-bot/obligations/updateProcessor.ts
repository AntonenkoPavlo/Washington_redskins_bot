import {ParsedUpdate} from "./parsedUpdate";

export interface UpdateProcessor {
    execute(parsedUpdate: ParsedUpdate): Promise<void>
}