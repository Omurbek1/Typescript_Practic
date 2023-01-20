export { }

interface DataModel{
    id: string,
    title: string,
    elements: {
        header: {
            title: string,
            desc: string,
            links:string
        },
        footer: {
            desc: string,
            links:string
        },
        body: [
            {
                title: string,
                content:{} 
            }
        ]
    }
}


type T0 = DataModel['elements']['footer']

type T1 = [number, string, boolean, ...string[]]
const arr: T1 = [1, 'qad', true, '']

type T3 = T1[1]

const sizex = ['small', 'latge', 'medium'] as const
type T5=typeof sizex[number]