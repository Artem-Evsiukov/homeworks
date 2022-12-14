import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        {_id: v1(), name: 'Artem'},
        {_id: v1(), name: 'Artem'},
        {_id: v1(), name: 'Artem'},

    ]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUserName = {_id: v1(), name: name}
        let newUsersNames = [...users, newUserName]
        setUsers(newUsersNames) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
