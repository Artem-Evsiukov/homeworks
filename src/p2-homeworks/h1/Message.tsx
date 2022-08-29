import React from 'react'
import styles from './Message.module.css'

type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={styles.wrap}>
            <div className={styles.row}>
                <div className={styles.img}>
                    <img src={props.avatar} alt=""/>
                </div>

                <div className={styles.col}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.message}>{props.message}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
            <div className={styles.row}>
                <textarea className={styles.textarea}></textarea>
                <button>send</button>
            </div>
        </div>
    )
}

export default Message
