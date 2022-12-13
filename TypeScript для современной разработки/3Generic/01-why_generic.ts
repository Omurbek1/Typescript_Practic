function head(value: string): string;
function head(value: number[]): number;

function head(value: string): string;
function head(value: boolean): boolean;
function head(value: any): any{
    return value[0]
};

interface MOdelData{
    title: string,
    value:string
}




