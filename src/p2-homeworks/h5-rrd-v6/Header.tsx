import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages';
import s from './Header.module.css'

type MenuPropsType = {
    id: string
    title: string
    PATH:{}
}

type MenuType = {
    menu: Array<MenuPropsType>
    menuActive: boolean
    setMenuActive: () => void
}

function Header(props: MenuType) {
    // const  onClickHandler = (e: MouseEventHandler<HTMLElement>) => {
    //     if(e())
    //     props.setMenuActive()
    //     alert(props.setMenuActive())
    // }

    const menuItem = props.menu.map(m => {
        return(
            <li className={s.nav__item} key={m.id}>
                <NavLink className={({isActive}) => isActive ? s.active : s.def}
                         to={m.PATH}>{m.title}</NavLink>

            </li>
        )
    })
    return (


        <nav className={s.nav} >
            <ul className={props.menuActive ? `${s.nav__list} ${s.menuActive}` : s.nav__list}>
                {menuItem}
            </ul>
            <div className={props.menuActive ? `${s.btn } ${s.btnActive}` : s.btn} onClick={(e) => {
                props.setMenuActive()

            }}></div>
        </nav>
    )
}

export default Header
