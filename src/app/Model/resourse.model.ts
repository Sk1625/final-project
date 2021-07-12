import { Employee } from "./employee.model";

export class Resourse {
    resId:number;
    title:string;
    description:string;
    category:string;
    resDate : Date;
    resType: string;
    price: number;
    emp: Employee= new Employee();
    

}
