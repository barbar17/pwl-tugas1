import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toReamur, reset } from "../redux/counter";

function ToReamur() {
    const { reamur } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [celcius, setCelcius] = useState(0);

    return (
        <div className='konversi'>
            <h1>Hasil Konversi : {reamur} Reamur</h1>
            <br />
            <input type='text' value={celcius} onChange={(event) => { setCelcius(event.target.value) }} />
            <br />
            <button onClick={() => dispatch(toReamur(celcius))}>Convert</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default ToReamur