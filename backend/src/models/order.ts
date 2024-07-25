import { RowDataPacket } from "mysql2";

export interface ResultOrdersProducts extends RowDataPacket{
    productId:Number, 
    count:Number
    name:string,
    price:number
}

export interface Order extends RowDataPacket{
    id?:number;
    name:string;
    order_date:Date;
    products:ResultOrdersProducts[];
}