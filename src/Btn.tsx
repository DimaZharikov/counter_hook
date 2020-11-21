import React from "react";
import style from './App.module.scss'


type PropsBtn ={
    btnTitle: string,
    onClick:()=> void,
    disabled: boolean

}



export function AppBtn(props: PropsBtn){
    return(<div>
        <button className={style.btnStyle}  onClick={props.onClick}  disabled={props.disabled}>{props.btnTitle}</button>
    </div>)
}

export default AppBtn;