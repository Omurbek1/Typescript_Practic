type PcBrand = {
    name: string,
    country: string,
    createAt:string
}

type WelcomeBrand = 'apple ' | 'lenovo' | 'hp';

type MyRecord = {
    [Brandkey in WelcomeBrand]?:PcBrand
}

const brandRecord: MyRecord = {
    apple:{
        country: 'Usa',
        createAt: new Date(),
        name:'apple'
   }
}
export {}