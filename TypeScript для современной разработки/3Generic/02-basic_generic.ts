// Затипизируйте данную функцию:

 export function append<T>(el, list:T[]) :T[]{
  return list.concat(el)
 }
append(1, [123, 3234])
append('21',[12,121,'12'])