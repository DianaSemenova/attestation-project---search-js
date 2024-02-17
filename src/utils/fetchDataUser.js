import { setTotalAmountUserData, setNumberPages } from '../store/slices/users';

const fetchDataUsers = async (
    paramsLogin,
    paramsSort,
    pagination,
    getUsers,
    setTextError,
    dispatch,
) => {
    try {
        const response = await getUsers({
            paramsLogin,
            paramsSort,
            perPage: pagination?.perPage,
            page: pagination?.page,
        });

        dispatch(setTotalAmountUserData(response.data?.total_count));
        dispatch(setNumberPages(response.data?.total_count));
    } catch (error) {
        setTextError(error.message);
    }
};

export { fetchDataUsers };
