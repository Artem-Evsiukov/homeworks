import React, {useState} from 'react'
import Header from './Header'
import Pages, {PATH} from './Pages'
import {HashRouter} from 'react-router-dom';
import { v1 } from 'uuid';

function HW5() {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    let menu = [
        {id:v1(), title:"Pre-Junior", PATH:PATH.PRE_JUNIOR},
        {id:v1(), title:"Junior", PATH:PATH.JUNIOR},
        {id:v1(), title:"Junior+", PATH:PATH.JUNIOR_PLUS}
    ]
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
            <Header menuActive={menuActive} setMenuActive={() => {setMenuActive(!menuActive)}} menu={menu}/>

            <Pages/>
            </HashRouter>
        </div>
    )
}

export default HW5
