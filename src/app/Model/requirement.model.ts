import { Resourse } from "./resourse.model";

export class Requirement extends Resourse {
    reqId : number;
    fulfilled: boolean;
    fulfilledOn : Date;
}

