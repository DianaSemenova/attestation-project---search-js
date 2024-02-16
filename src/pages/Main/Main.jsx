/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './main.style';
import Filter from '../../components/FilterBlock/Filter/Filter';
import SearchNoResultSvg from '../../components/UI/Icons/Search/SearchNoResultSvg';
import { useGetUsersQuery } from '../../store/services/users';

export default function MainPage() {
    const { paramsLogin, paramsSort, perPage, page } = useSelector(
        (state) => state.users,
    );
    const { data, isLoading, isError } = useGetUsersQuery({
        paramsLogin,
        paramsSort,
        perPage,
        page,
    });

    useEffect(() => {
        if (data && paramsLogin && paramsSort && perPage && page) {
            console.log('data', data);
        }
    }, [data, paramsLogin, paramsSort, perPage, page]);

    const getTextResult = () => {
        if (isError) {
            return 'Не удалось загрузить пользователей...';
        }

        if (!isError && !isLoading) {
            if (!data) {
                return 'Пожалуйста, введите в поле ввода данные пользователя, такие как логин или имя, чтобы получить список пользователей.';
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
            <Filter />
            <S.NoResultBlock>
                <S.TextResult>
                    {getTextResult()}
                    <SearchNoResultSvg />
                </S.TextResult>
            </S.NoResultBlock>
        </S.App>
    );
}
