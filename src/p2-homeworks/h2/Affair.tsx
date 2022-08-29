import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css'

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
        <div className={s.wrap}>
            <div className={s.flex}>{props.affair.name}</div>
            <div className={s.priority}>{props.affair.priority}</div>
            <div>
                <button className={s.button} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )

}

export default Affair
