/**
 * Объединения или union не являются собственно типом данных, но они позволяют комбинировать или объединить другие типы. Так, с помощью объединений 
 * можно определить переменную, которая может хранить значение 
 * двух или более типов:
 * let id : number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id);  // 23
 */

type Status = 'ok' | 'loading' | 'error'

const x: Status = 'loading'

function welcome(person: [string, string] | string): number | string{
    
    if (Array.isArray(person)) {
        console.log('Hello', person.join(''));
        return 1
        
    } else {
        console.log('Hello', person);
        return person
    }

}