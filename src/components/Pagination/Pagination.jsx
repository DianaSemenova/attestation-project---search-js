import { useDispatch, useSelector } from 'react-redux';
import * as S from './pagination.style';
import Button from '../UI/Button/Button';
import {
    setIsOpenDataAmount,
    setPage,
    setPerPage,
} from '../../store/slices/users';

export default function Pagination() {
    const dispatch = useDispatch();
    const {
        isOpenDataAmount,
        numberPages,
        page,
        totalAmountUserData,
        perPage,
        arrAmountData,
    } = useSelector((state) => state.users.pagination);

    return (
        <S.Pagination $active={totalAmountUserData <= 10}>
            <S.NumberPageDiv>
                {numberPages.map((number) => (
                    <Button
                        key={number}
                        classes="pagination"
                        isActive={number === page}
                        onClick={() => dispatch(setPage(number))}
                    >
                        {number}
                    </Button>
                ))}
            </S.NumberPageDiv>

            <S.DataAmount
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(setIsOpenDataAmount(!isOpenDataAmount));
                }}
            >
                {totalAmountUserData > 10 && (
                    <Button classes="dataAmount" isActive={isOpenDataAmount}>
                        Показывать по: {perPage}
                    </Button>
                )}

                {isOpenDataAmount && (
                    <S.DataAmountUl>
                        {arrAmountData.map((item) => (
                            <S.Li
                                key={item}
                                $active={item === perPage}
                                onClick={() => dispatch(setPerPage(item))}
                            >
                                по: {item}
                            </S.Li>
                        ))}
                    </S.DataAmountUl>
                )}
            </S.DataAmount>
        </S.Pagination>
    );
}
