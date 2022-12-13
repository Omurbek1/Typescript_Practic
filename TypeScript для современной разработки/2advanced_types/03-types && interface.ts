
// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle


// Интерфайсе менен
interface IProduct{
    title:string
    price: number,
    isNew?: boolean,
    isSale?: boolean,
}
interface IVehicle{
    wheels: number,
    year: number,
    brand:string
}
interface ICar extends IProduct, IVehicle{
    type: string,
    model:string
}
const icar: ICar = {
    type: "",
    model: "",
    title: "",
    price: 0,
    wheels: 0,
    year: 0,
    brand: ""
}


type Product={
    title:string
    price: number,
    isNew?: boolean,
    isSale?: boolean,
}
type Vehicle={
    wheels: number,
    year: number,
    brand:string
}
type Car = IProduct & Vehicle &{
    type: string,
    model:string
}
const icartype: ICar = {
    type: "",
    model: "",
    title: "",
    price: 0,
    wheels: 0,
    year: 0,
    brand: ""
}