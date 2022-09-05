import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: null | string// need to fix any
    totalUsers: number // need to fix any
    onKeyPreessHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyPreessHandler} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass ? "error" : ''} onKeyPress={onKeyPreessHandler}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorMessage}>{error}</div> }

        </div>
    )
}

export default Greeting
