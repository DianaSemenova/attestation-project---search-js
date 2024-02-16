/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './main.style';
import Filter from '../../components/FilterBlock/Filter/Filter';
import SearchNoResultSvg from '../../components/UI/Icons/Search/SearchNoResultSvg';
import { useLazyGetUsersQuery } from '../../store/services/users';
import { getTextResult } from '../../utils/helpers';

export default function MainPage() {
    const { paramsLogin, paramsSort, perPage, page } = useSelector(
        (state) => state.users,
    );

    const [getUsers, { isLoading, isError, data }] = useLazyGetUsersQuery();

    useEffect(() => {
        console.log('isLoading', isLoading);
    }, [isLoading]);

    useEffect(() => {
        console.log('isError', isError);
    }, [isError]);

    console.log('data', data);

    const fetchDataUsers = async () => {
        try {
            await getUsers({
                paramsLogin,
                paramsSort,
                perPage,
                page,
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (paramsLogin && paramsSort && perPage && page) {
            fetchDataUsers();
        }
    }, [paramsLogin, paramsSort, perPage, page]);

    return (
        <S.App>
            {data?.items.length > 0 && paramsLogin && <Filter />}
            {(!data || data?.items?.length === 0 || !paramsLogin) && (
                <S.NoResultBlock>
                    <S.TextResult>
                        {getTextResult(isError, isLoading, data, paramsLogin)}
                        <SearchNoResultSvg />
                    </S.TextResult>
                </S.NoResultBlock>
            )}
        </S.App>
    );
}
