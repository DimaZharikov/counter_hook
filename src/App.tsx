import React, {useState} from 'react';
import Setting from "./Setting";
import Counter from "./Couner";
import AppBtn from "./Btn";
import style from './App.module.scss'


function App() {

    const [counterMaxValue, setCounterMaxValue] = useState(5)
    const [counterMinValue, setCounterMinValue] = useState(0)
    const [counter, setCounter] = useState<any>(counterMinValue)




    const incMaxValue = () => {
        if (counterMaxValue >= counterMinValue) {
            setCounterMaxValue(counterMaxValue + 1)

        }

    }

    const subMaxValue = () => {
        if (counterMinValue < counterMaxValue) {
            setCounterMaxValue(counterMaxValue - 1)
        }else
            {setCounter('Incorrected Value')}
    }

    const incMinValue = () => {
        if (counterMinValue < counterMaxValue) {
            setCounterMinValue(counterMinValue + 1)
        } else {setCounter('Incorrected Value')}
    }

    const subMinValue = () => {
    if (counterMinValue > 0)
    {setCounterMinValue(counterMinValue - 1)}
    else {setCounter('MinValue < 0')}

        }


    const Set = () => {
        if (counterMinValue >= 0) {
            setCounter(counterMinValue)
        } else {setCounter('Error')}
    }
    const Inc = () => {

        if (counterMaxValue > counterMinValue) {
            if (counterMaxValue > counter) {
                setCounter(counter + 1)
            }
        }


    }
    const Reset = () => {
        setCounter(counterMinValue)
    }


    return (<div className={style.content}>

        <div className={style.boxItems}>
            <div className={style.monitorBox}>
                <div>
                    <Setting
                        counterMax={counterMaxValue}
                        counterMinValue={counterMinValue}
                        incMaxValue={incMaxValue}
                        subMaxValue={subMaxValue}
                        incMinValue={incMinValue}
                        subMinValue={subMinValue}
                        counter={ counter }
                    />
                </div>

            </div>

            <div className={style.btnBox}>
                <AppBtn btnTitle={'Set'} onClick={Set} disabled={false}/>
            </div>

        </div>

        <div className={style.boxItems}>
            <div className={style.monitorBox}>
                <Counter
                    counter={counter}
                    counterMaxValue ={counterMaxValue}
                    counterMinValue ={counterMinValue}

                />
            </div>


            <div className={style.btnBox}>
                <AppBtn btnTitle={'Inc'} onClick={Inc} disabled={counter === 'Error'}/>
                <AppBtn btnTitle={'Reset'} onClick={Reset} disabled={counter === 'Error'}/>
            </div>

        </div>


    </div>)

}


export default App;