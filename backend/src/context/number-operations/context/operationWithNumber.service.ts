import {Injectable} from "@nestjs/common";
import {Numbers} from "../../../infrastructure/obligations/numbers";

@Injectable()
export class OperationWithNumberService {
    private resultOperation: number = 0;

    sum(numbersToSum: Numbers) {
        this.resultOperation = 0
        let objectToArray = Object.values(numbersToSum)
        for(let i = 0; i < objectToArray.length; ++i) {
            if(isNaN(objectToArray[i]) === true || objectToArray[i] === true) continue;
            let conversionToNumber = Number(objectToArray[i])
            this.resultOperation = this.resultOperation + conversionToNumber
        }
        return String(this.resultOperation);
    }
}