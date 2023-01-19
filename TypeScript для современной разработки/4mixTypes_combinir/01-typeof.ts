import {averge} from '../01'

let str='Hello OMubrek'

type x = typeof str
type fn = typeof averge

const max: fn = (...numbers) => Math.max(...numbers)
max(1, 2, 3, 4)

type returnFn=ReturnType<typeof averge> 