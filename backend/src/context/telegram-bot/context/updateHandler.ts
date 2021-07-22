import {Injectable} from "@nestjs/common";
import {TypeContainer} from "./typeContainer";
import {UpdateParser} from "./updateParser";

@Injectable()

export class UpdateHandler {
    constructor(
       private typeContainer: TypeContainer,
       private updateParser: UpdateParser
    ) {}

    async execute(parsedUpdate: any) {
        const parsedData = this.updateParser.parseUpdate(parsedUpdate)
        const serviceByType = this.typeContainer.get(parsedData.type)

        await serviceByType.execute(parsedData)
    }
}