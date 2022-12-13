function sum(a: number, b: number): number{
    return a+b
}
sum(2,  4)


function log(name: string, userId: string): void{
    console.log('Hello',name,'Wif Id',userId || 'anom')
}
log('Oma', '2131')


function crash(): never{
    throw new Error('crag')
}


// caclu

function average(...nums: number[]) {
    const sum = nums.reduce((current, total) => current + total, 0)
    
    return sum /nums.length
}