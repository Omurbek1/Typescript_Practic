// перегрузки функции

function add(a: number, b: number): number;
function add(a:string,b:string):string
function add(a: any, b:any): string | number{
    return a+b
}
add(1, 2)

type asyncCb = (res: number) => number

function asyncCb(a: number, b: number): Promise<number>;

function asyncCb(a: number, b: number, cd: asyncCb): number;
function asyncCb(a: number, b: number, cb?: asyncCb): any{
    const result = a + b
    if (cb) {
        return cb(result)
    }
    return Promise.resolve(result)
}
asyncCb(1,2)