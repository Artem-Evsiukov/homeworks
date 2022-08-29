import React from 'react'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    // need to fix any
    affair: AffairType
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <div>{props.affair.name}</div>
            <div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )

}

export default Affair
