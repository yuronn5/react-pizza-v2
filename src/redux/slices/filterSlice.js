import { createSlice } from '@reduxjs/toolkit'

//default state after first render
const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярності',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log(action)
            state.categoryId = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
    }
})

export const { setCategoryId, setSort } = filterSlice.actions

export default filterSlice.reducer