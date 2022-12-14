interface AnyOBjectsz{
    [key:string]:number
}

export async function request(url: string) {
  const response = await fetch(url);
  return response.json();
}
interface Todos{
    id: string,
    completed: boolean,
    title:string
}
const data =request<Todos[]>('')
