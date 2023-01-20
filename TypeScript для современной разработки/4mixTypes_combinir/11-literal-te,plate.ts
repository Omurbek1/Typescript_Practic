export { }

type Size = 'top' | 'right' | 'left' | 'bottom'
 
type Margin = `margin-${Size}`
type Margin2 = `margin${ '' |Capitalize<Size>}`


type PAdding=`padding-${Size}`