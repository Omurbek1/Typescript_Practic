import React from 'react'

interface NewToDoFormprops{
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick:()=>void
}



export const NewToDoForm = ({value,onChange,handleClick}:NewToDoFormprops) => {
    return (
        <>
            <input
                type='text'
                placeholder='sa'
                className='form-control'
                value={value}
                onChange={onChange}
            />
            <button onClick={handleClick}>Add ToDo</button>
        </>

    )
}
