import { useDispatch, useSelector } from 'react-redux';
import * as S from './pagination.style';
import Button from '../UI/Button/Button';
import { setIsOpenDataAmount, setPage } from '../../store/slices/users';

export default function Pagination() {
    const dispatch = useDispatch();
    const { isOpenDataAmount, numberPages, page } = useSelector(
        (state) => state.users.pagination,
    );
    const arrAmountData = [100, 50, 25, 10, 5];

    return (
        <S.Pagination>
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
                <Button classes="dataAmount" isActive={isOpenDataAmount}>
                    Показывать по: 10
                </Button>

                {isOpenDataAmount && (
                    <S.DataAmountUl>
                        {arrAmountData.map((item) => (
                            <S.Li key={item}>по: {item}</S.Li>
                        ))}
                    </S.DataAmountUl>
                )}
            </S.DataAmount>
        </S.Pagination>
    );
}
