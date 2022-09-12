let str = 'Номер эмес'
let sum: number = str as any/// ~~~ Тип 'string' не может быть назначен для типа 'number

let v = { str: 'Salam', sum: 18 }

// interface State{
//     name: string,
//     capital:string
// }

// //  tsc --noImplicitAny program.ts -комплвция кыла турган команда

// const states:State[] = [
//     {name:'Osh',capital:'Osh'},
//     {name:'Naryn',capital:'Naryn'},
//     {name:'Talas',capital:'Talas'},
// ]
// for (const state of states) {
//     console.log(state.capital)
// }

interface State{
    name: string,
    age:number
}

const names:State[] = [
    {name:'Omurbek',age:18},
    {name:'Taalaibek',age:11},
    {name:'Roza',age:28},
]

for (const state of names) {
    console.log(`$<h1>Менин атым </h1>"${state.name}+","+"Жашым"+${state.age}`)
}
