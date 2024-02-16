import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenSort: false,
    arrSortMethods: ['По возрастанию', 'По убыванию'],
    currentSortValue: 'По возрастанию',
    paramsSearch: '',
};

export const usersSlice = createSlice({
    name: 'usersReducer',
    initialState,

    reducers: {
        setIsOpenSort: (state, action) => {
            state.isOpenSort = action.payload;
        },
        setCurrentSortValue: (state, action) => {
            state.currentSortValue = action.payload;
        },
        setParamsSearch: (state, action) => {
            state.paramsSearch = action.payload;
        },
    },
});

export const { setIsOpenSort, setCurrentSortValue, setParamsSearch } =
    usersSlice.actions;

export default usersSlice.reducer;
