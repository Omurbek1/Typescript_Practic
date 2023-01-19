function promPair(pair:[string , string]) {
    const [key, value] = pair;
    return {
        [key]:value
    }
}

type FirstArg<T>=T extends (first:infer First,...args:any[])=>any?First :never
const myPair:FirstArg<typeof promPair> = ["mykey", "myvalue"]

promPair(myPair as never[string| string])



type Constructor<T> = T extends { new(args: infer A, ...arg: any): any } ? A : never

class Computer{
    constructor(brand:string){}
}
let brand:Constructor<typeof Computer>=''
export {}