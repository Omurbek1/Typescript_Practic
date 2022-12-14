type TypeFActory<T> = T
type XTYpe = TypeFActory<string>
type XTYpe2 = TypeFActory<number>
type XTYpe3 = TypeFActory<boolean>

function toArray<T>(...arg:T[]) {
    return arg
}
toArray(1, 2, 3)
toArray('aas','as')