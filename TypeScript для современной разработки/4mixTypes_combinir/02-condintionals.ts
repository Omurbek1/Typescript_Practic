const x = 16
const isxNegative = x >= 0 ? "no" : "yes"



interface StringREcords{
    [key:string]:string
}
interface DateRecords{
    [key:string]:Date
}
type MyRecord<T> = T extends string ? StringREcords : DateRecords

type Obj1 = MyRecord<string>

const Object2: Obj1 = {
    r:'1234'
}
export {}