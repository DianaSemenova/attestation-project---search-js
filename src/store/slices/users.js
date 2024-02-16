import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenSort: false,
    isOpenDataAmount: false,
    arrSortMethods: ['По возрастанию', 'По убыванию'],
    currentSortValue: 'По возрастанию',
    paramsLogin: '',
    paramsSort: 'asc',
    perPage: 10,
    page: 1,
};

export const usersSlice = createSlice({
    name: 'usersReducer',
    initialState,

    reducers: {
        setIsOpenSort: (state, action) => {
            state.isOpenSort = action.payload;
        },
        setIsOpenDataAmount: (state, action) => {
            state.isOpenDataAmount = action.payload;
        },
        setCurrentSortValue: (state, action) => {
            state.currentSortValue = action.payload;
        },
        setParamsLogin: (state, action) => {
            state.paramsLogin = action.payload;
        },
        setParamsSort: (state, action) => {
            const { currentSortValue } = action.payload;

            if (currentSortValue === 'По возрастанию') {
                state.paramsSort = 'asc';
            } else {
                state.paramsSort = 'desc';
            }
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const {
    setIsOpenSort,
    setIsOpenDataAmount,
    setCurrentSortValue,
    setParamsLogin,
    setParamsSort,
    setPerPage,
    setPage,
} = usersSlice.actions;

export default usersSlice.reducer;
