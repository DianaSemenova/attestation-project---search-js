/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './main.style';
import Filter from '../../components/FilterBlock/Filter/Filter';
import SearchNoResultSvg from '../../components/UI/Icons/Search/SearchNoResultSvg';
import { useLazyGetUsersQuery } from '../../store/services/users';
import { getTextResult, handleClearCacheUsers } from '../../utils/helpers';
import { fetchDataUsers } from '../../utils/fetchDataUser';
import UsersList from '../../components/UsersBlock/Users/Users';

export default function MainPage() {
    const dispatch = useDispatch();
    const { paramsLogin, paramsSort, pagination } = useSelector(
        (state) => state.users,
    );
    const [getUsers, { isLoading, isError, data }] = useLazyGetUsersQuery();
    const [textError, setTextError] = useState('');

    useEffect(() => {
        if (
            paramsLogin &&
            paramsSort &&
            pagination.perPage &&
            pagination.page
        ) {
            fetchDataUsers(
                paramsLogin,
                paramsSort,
                pagination,
                getUsers,
                setTextError,
                dispatch,
            );
        }
    }, [paramsLogin, paramsSort, pagination.perPage, pagination.page]);

    useEffect(() => {
        if (data && !paramsLogin) {
            handleClearCacheUsers(dispatch);
        }
    }, [paramsLogin]);

    return (
        <S.App>
            {(!data ||
                data?.items?.length === 0 ||
                data?.items?.length > 0) && (
                <S.NoResultBlock>
                    <S.TextResult $active={data?.items?.length > 0}>
                        {getTextResult(
                            isError,
                            isLoading,
                            data,
                            paramsLogin,
                            textError,
                        )}
                        {!isLoading && !data?.items?.length > 0 && (
                            <SearchNoResultSvg />
                        )}
                    </S.TextResult>
                </S.NoResultBlock>
            )}

            {data?.items.length > 0 && paramsLogin && <Filter />}

            {paramsLogin && data?.items.length > 0 && <UsersList data={data} />}
        </S.App>
    );
}
