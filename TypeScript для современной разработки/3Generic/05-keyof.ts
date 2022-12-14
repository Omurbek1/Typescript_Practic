type WindowProp = keyof Window

const myvalue: WindowProp = 'ontoggle'

interface PC{
    brand: string,
    year:number
}

type Type1 = keyof PC

const calu1: Type1 = 'year'

type Turple = keyof [string, number]

const val2: Turple = 'find'

