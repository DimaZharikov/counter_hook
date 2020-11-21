 import React, {useState} from 'react';
import style from './App.module.scss'


 type PropsCounter = {
     counter: number
     counterMaxValue: number
     counterMinValue: number




 }




 export function Counter(props: PropsCounter) {





    return(<div className={style.counterBox}>
        <div
            className={
            props.counter === props.counterMaxValue ? style.maxNumber : ''  }
                 >

             <h1> {props.counter}</h1>


       </div>



    </div>)
 }

export default Counter;
