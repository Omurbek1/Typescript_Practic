

function printlen<T extends {length:number}>(arg:T) :number{
    return arg.length
    
}
printlen('213')
printlen({ length: 1 })
const obj1 = { a: 1 }
printlen({length:1})