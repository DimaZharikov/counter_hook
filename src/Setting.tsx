import React, {useState} from 'react';

import style from './App.module.scss'


type SettingType = {
    counterMax: number
    counterMinValue: number
    counter: any
    incMaxValue: () => void
    subMaxValue: () => void
    incMinValue: () => void
    subMinValue: () => void

}


function Setting(props: SettingType) {






    return (<div>

        <div>
            <div className={style.SettingItems}>

                <h3>Value Max:</h3>


                <input type="text"
                       value={props.counterMax}
                       onChange={event => event.currentTarget.value}
                       className={props.counter === 'Incorrected Value'? style.ValueError: ''}

                />


                <div className={style.btnInput}>
                    <button onClick={props.incMaxValue}>+</button>
                    <button onClick={props.subMaxValue}>-</button>
                </div>

            </div>


        </div>
        <div className={style.SettingItems}>
            <h3>Value Min:</h3>
            <input type="text"
                   value={props.counterMinValue}
                   onChange={event => event.currentTarget.value}
                   className={props.counter === 'MinValue < 0' ? style.ValueError: ''}


            />
            <div className={style.btnInput}>
                <button onClick={props.incMinValue}>+</button>
                <button

                    onClick={props.subMinValue}>-
                </button>

            </div>

        </div>

    </div>)
}


export default Setting