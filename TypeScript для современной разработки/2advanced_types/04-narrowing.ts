// Сужение типов

function example(x?: string | number) {
    if (typeof x === 'string') {
         x.toLowerCase()
    }
    else if (typeof x === 'number') {
        x.toFixed()
    } else if (x === undefined) {
        console.log('no value');
    } else {
        x
    }
}
 
function example2(str: string | string[] | null) {
    if (str && typeof str === 'object') {
        str.concat([])
    } else if (typeof str==='string') {
        str.toLowerCase()
    }
}

function example3(x: number | Date) {
    if (x instanceof Date) {
        x.getMonth()
    } else {
        x.toFixed()
    }
}


type Fish = { swim: () => void }
type Bird={fly:()=>void}

function move(animal: Fish | Bird) {
    if ('swim' in animal){
        return animal.swim()
    }
    return animal.fly()
    
}