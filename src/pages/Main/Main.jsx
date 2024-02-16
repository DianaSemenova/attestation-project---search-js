/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './main.style';
import Filter from '../../components/FilterBlock/Filter/Filter';
import SearchNoResultSvg from '../../components/UI/Icons/Search/SearchNoResultSvg';
import { useLazyGetUsersQuery } from '../../store/services/users';

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

    useEffect(() => {
        console.log('data', data);
    }, [data]);

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

    const getTextResult = () => {
        if (isError) {
            return 'Не удалось загрузить пользователей...';
        }

        if (!isError && !isLoading) {
            if (!data) {
                return 'Пожалуйста, введите в поле ввода данные пользователя, чтобы получить список пользователей.';
            }

            if (paramsLogin && data?.length === 0) {
                return `Пользователи по запросу «${paramsLogin}» не найдены.`;
            }
        }

        if (!isError && isLoading) {
            return `Загрузка...`;
        }
    };

    return (
        <S.App>
            {data?.length > 0 && <Filter />}
            {(!data || data?.length === 0) && (
                <S.NoResultBlock>
                    <S.TextResult>
                        {getTextResult()}
                        <SearchNoResultSvg />
                    </S.TextResult>
                </S.NoResultBlock>
            )}
        </S.App>
    );
}
