import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        kelvin: 0,
        reamur: 0,
        fahrenheit: 0
    },
    reducers: {
        toFahrenheit: (state, action) => {
            state.fahrenheit += (action.payload * 1.8) + 32
        },
        toKelvin: (state, action) => {
            state.kelvin += (action.payload * 1) + 273.15
        },
        toReamur: (state, action) => {
            state.reamur += (action.payload * 0.8)
        },
        reset: (state) => {
            state.fahrenheit = 0
            state.kelvin = 0
            state.reamur = 0
        }
    }
})

export const { toFahrenheit, toKelvin, toReamur, reset } = counterSlice.actions

export default counterSlice.reducer