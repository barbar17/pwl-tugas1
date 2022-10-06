import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { reset, toKelvin } from "../redux/counter";

function ToKelvin() {
    const { kelvin } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [celcius, setCelcius] = useState(0);

    return (
        <div className='konversi'>
            <h1>Hasil Konversi : {kelvin} Kelvin</h1>
            <br />
            <input type='text' value={celcius} onChange={(event) => { setCelcius(event.target.value) }} />
            <br />
            <button onClick={() => dispatch(toKelvin(celcius))}>Convert</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default ToKelvin