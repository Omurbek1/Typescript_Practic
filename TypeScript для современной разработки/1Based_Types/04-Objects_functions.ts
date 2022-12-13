function printPoint(point: { x: string, y: string }): void{
    console.log(`Coordinate x:${point.x} and y :${point.y}`);
    
}

const obj1 = {
    x: '1',
    y:'2'
}
printPoint(obj1)

const obj2 = {
    x: '1',
    y: '2',
    z:'s'
}

printPoint(obj2)


function printName(user: {
    firstname: string,
    lastName:string
}): void{
    console.log('Hello', user.firstname.toUpperCase())
    
    if (user.lastName) {
        console.log('hshsh',user.lastName.toUpperCase())
    }
}

printName({firstname:'Oma',lastName:'sasas'})

