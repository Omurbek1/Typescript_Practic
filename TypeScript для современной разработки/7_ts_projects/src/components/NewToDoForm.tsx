import React,{useRef} from 'react'


interface NewToDoFormprops{
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick:()=>void
}



export const NewToDoForm = ({value,onChange,handleClick}:NewToDoFormprops) => {
    const inputref=useRef(null)
    return (
        <>
            <input
                type='text'
                placeholder='sa'
                className='form-control'
                value={value}
                ref={inputref}
                onChange={onChange}
            />
            <button onClick={handleClick}>Add ToDo</button>
        </>

    )
}
