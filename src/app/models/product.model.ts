export interface Product{

    id:number;    
    name?:string;
    categoryId?:number;
    quantityPerUnit?:string;
    unitPrice?:number;
    unitsInStock?:number;
    discontinued?: boolean
  
    }